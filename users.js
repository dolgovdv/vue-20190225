const usersTable = {
  template: '#users-table',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
    }
  },
  computed: {
    // проверка на наличие аватарки
    listChange: function(){  
      this.users.forEach(element => {
        if (element.avatar === "") {
          // haveAvatar = false
          element.avatar = "http://www.avatar-mix.ru/avatars_64x64/289.jpg"          
        }  
      });        
      return this.users
    },
    // колличество пользователей
    countList: function() {
      return this.users.length          
    }
  },
  methods: {
    valueName: function(value, key){
      if (key === "id") {
        return "убрать id"
      } 
      if (key === "avatar") {
        // передать вместо текста картинку ???
        return "убрать столбец"
      }
      const valApper = value.toUpperCase()
      // console.log('valApper =', valApper)
      return valApper
    },
    // проверка аватарки и замена на значение по умолчанию
    changeAvatarShow: function(av) {
      if (av === "") {
        av = "http://www.avatar-mix.ru/avatars_64x64/289.jpg"
      }
      return av
    },
    removeUser: function(id)  {
      console.log('removeUser =', id)
      
      this.$emit('remove-user', id)
    },
    editUser: function(listItem) {
      this.$emit('user-edit', listItem)    
    }
  }
}
