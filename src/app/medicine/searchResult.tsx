'use server'
import connectMongoDB from '@/helper/db'
import Medicine from '@/models/Medicine'

export default async function searchResult(str:string){
    await connectMongoDB()
    let searchTerm = `${str}`

    const convertFirstLetter = (text:string) => {
        const convert = text.replace(/(^w{1})|(\.\s*\w{1})/g, (match)=> match.toUpperCase())
        return convert
    }

    const searchTermFirst = convertFirstLetter(searchTerm)

    let results = await Medicine.find({
        $or: [
            {
                name: {$regex: searchTerm}
            },
            {
                name: {$regex: searchTermFirst}
            }
        ]
    })

    return results;
}
