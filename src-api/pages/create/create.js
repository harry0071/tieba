  import url from '@/utils/api.js';
  export default {
    data() {
      return {
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
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$request(url.createBlog,{title:this.ruleForm.title,description:this.ruleForm.desc,content:this.ruleForm.content},'post')
            .then(res=>{
              this.$notify({
                title:'成功',
                message:'发帖成功 ヾ(๑╹◡╹)ﾉ"',
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