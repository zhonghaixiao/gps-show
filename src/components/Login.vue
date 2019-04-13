<template>
  <div class="login-container" ref="body">
    <div class="panel">
      <Form class="form-container" ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user" class="form-item">
          <Input class="form-item-input" type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem  class="form-item" prop="password">
          <Input class="form-item-input" type="password" v-model="formInline.password" placeholder="Password">
            <Icon  type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button class="form-item-button" type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }

      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!');
            this.$router.push({path: '/index/introduction'});
          } else {
            this.$Message.error('登录失败!');
          }
        })
      }
    },
    mounted(){
      this.$refs.body.style.height = window.innerHeight + 'px';
    }
  }
</script>

<style scoped lang="less">
  .login-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/login.jpg");
    .panel{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      background-color: rgba(52, 52, 52, 0.6);
      border-radius: 10px;
      .form-container{
        display: flex;
        width: 95%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .form-item{
          width: 82%;
          .form-item-input{
            width: 100%;
          }
        }
      }
    }
  }

</style>
