import {
  mapState,
  mapActions
} from 'vuex';
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error('密码长度6~16个字符'));
      } else {
        callback();
      }
    };
    return {
      message: '',
      ruleForm2: {
        pass: '',
        name: ''
      },
      rules2: {
        pass: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        name: [{
          validator: checkName,
          trigger: 'blur'
        }]
      }
    };
  },
  computed: {
    ...mapState
  },
  methods: {
    ...mapActions(['login']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login({
              username: this.ruleForm2.name,
              password: this.ruleForm2.pass
            })
            .then(() => {
              this.$notify({
                type: 'success',
                title: '成功',
                message: '登录成功 ٩(๑❛ᴗ❛๑)۶',
                offset: 100
              });
              this.$router.push(this.$route.query.redirect || '/');
            }, err => {
              if (err.code === 211) {
                this.message = '该用户不存在';
              } else {
                this.message = '用户名与密码不匹配';
              }
              this.$message({
                showClose: true,
                message: this.message,
                type: 'error'
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
