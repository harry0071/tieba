  import url from '@/utils/api.js';
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
        this.$request(url.blogId+this.blogId)
        .then(({data})=>{
          this.ruleForm.title = data.title;
          this.ruleForm.desc = data.description;
          this.ruleForm.content = data.content;
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$request(url.blogId+this.blogId,{title:this.ruleForm.title,description:this.ruleForm.desc,content:this.ruleForm.content},'patch')
            .then(res=>{
              this.$notify({
                title:'成功',
                message:'修改帖子成功 ヾ(๑╹◡╹)ﾉ"',
                type:'success'
              });
              this.$router.push({
                name:'detail',
                params:{blogId:res.data.id}
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