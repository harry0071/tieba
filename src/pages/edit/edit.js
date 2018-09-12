export default {
    data() {
      return {
        blogId:0,
        ruleForm: {
          title: '',
          desc:'',
          content: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
          ],
          desc: [
            {required:true,message:'请输入帖子内容摘要',trigger:'blur'},
            {min:3,max:80,message:'内容摘要需要在 3 ~ 80 个字符之间'}
          ],
          content: [
            { required: true, message: '请填写帖子详细内容', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      this.blogId = this.$route.params.blogId;
      this.getBlog();
    },
    methods: {
      getBlog(){
        let query = new this.AV.Query('Blogs');
        query.get(this.blogId).then(res => {
          let data = res.toJSON();
          this.ruleForm.title = data.title;
          this.ruleForm.desc = data.description;
          this.ruleForm.content = data.content;
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let blog = this.AV.Object.createWithoutData('Blogs', this.blogId);
            blog.save({title:this.ruleForm.title,description:this.ruleForm.desc,content:this.ruleForm.content}).then(res=>{
              console.log(res)
              this.$notify({
                title:'成功',
                message:'修改帖子成功 ヾ(๑╹◡╹)ﾉ"',
                type:'success',
                offset:100
              });
              this.$router.push({
                name:'detail',
                params:{blogId:this.blogId}
              });
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }