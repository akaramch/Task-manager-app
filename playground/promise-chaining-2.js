require('../src/db/mongoose')
const Task= require('../src/models/task')
// Task.findByIdAndDelete('5d17b02faee08037e45a9ca5').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount= async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5d17da918192d73e48bd9ea9').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})