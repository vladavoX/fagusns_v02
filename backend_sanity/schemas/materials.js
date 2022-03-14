export default{
  name:'materials',
  title:'Materials',
  type: 'document',
  fields:[
      {
          name:'name',
          title:'Name',
          type:'string'
      },
      {
          name:'bgColor',
          title:'BgColor',
          type:'string'
      },
      {
          name:'icon',
          title:'Icon',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
      
  ]
}