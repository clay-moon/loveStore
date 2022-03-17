import { createStore } from 'vuex'


export default createStore({
  state: {
    
      userName : 'a',
      animeDoneProps : [] as  {id: number,
        name: string,
        introduce: string,
        tag: string,
        value: number,
        textarea: string,
        url: string}[],
       commonProps : [] as  {id: number,
          name: string,
          introduce: string,
          tag: string,
          value: number,
          textarea: string,
          url: string}[],
          animeDoneCount: 0,
          commonPropsCount: 0,

  },
  getters: {
    
  },
  mutations: {
    userNameChange(state,userName) {
      state.userName = userName
    },
    animeDonePropsChange(state,animeDoneProps) {
      if(animeDoneProps instanceof Array) {
        state.animeDoneProps = animeDoneProps
      }
      else{
        state.animeDoneProps.push(animeDoneProps)
      } 
    },
    commonPropsChange(state,Props) {
      if(Props instanceof Array) {
        state.commonProps = Props
      }
      else{
        state.commonProps.push(Props)
      } 
    },
    commonPropsCountChange(state,commonPropsCount=0) {
      if(commonPropsCount) {
        state.commonPropsCount = commonPropsCount
      }
      else {
        state.commonPropsCount++
      } 
    },
    animeDonePropsCountChange(state,animeDonePropsCount=0) {
      if(animeDonePropsCount) {
        state.animeDoneCount = animeDonePropsCount
      }
      else {
        state.animeDoneCount++
      } 
    }

  },
  actions: {
  },
  modules: {
  }
})
