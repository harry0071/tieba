import { mapActions } from 'vuex';
const reg = /^\d+/;
export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else if(reg.test(value)){
          return callback(new Error('用户名不能以数字开头'));
        } else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length<6 || value.length>16){
          callback(new Error('密码长度6~16个字符'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      ...mapActions(['register']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.register({username:this.ruleForm2.name,password:this.ruleForm2.pass})
            .then(res => {
              this.$notify({
                type:'success',
                title:'成功',
                message:'登录成功 ٩(๑❛ᴗ❛๑)۶',
                offset: 100
              });
              this.$router.push('/');
            },err => {
              this.$message.error('该用户名已被注册');
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