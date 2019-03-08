const list = [
  {id: 1, firstName: "Иван", secondName: "Иванович", surName: "Иванов", avatar: "http://www.avatar-mix.ru/avatars_64x64/440.jpg"},
  {id: 2, firstName: "Петр", secondName: "Петрович", surName: "Иванов", avatar: ""},
  {id: 3, firstName: "Иван", secondName: "Иванович", surName: "Иванов", avatar: "http://www.avatar-mix.ru/avatars_64x64/440.jpg"},
  {id: 4, firstName: "Иван", secondName: "Иванович", surName: "Иванов", avatar: "http://www.avatar-mix.ru/avatars_64x64/440.jpg"},
  {id: 5, firstName: "Иван", secondName: "Иванович", surName: "Иванов", avatar: ""},
]

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
    // смена аватарки на текст
    changeAvatarShow: function(av) {
      if (av === "") {
        av = "http://www.avatar-mix.ru/avatars_64x64/289.jpg"
      }
      return av
    }     
  }
}
