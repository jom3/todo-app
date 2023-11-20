export interface Routes{
  name:string;
  route:string;
}


export const navigation:Routes[] =[
  {
    name:'user',
    route:'/user'
  },
  {
    name:'task',
    route:'/task'
  }
]
