import conf from '../conf/conf.js'
import {Client, Account,ID, Storage,Query } from 'appwrite';


export class Services{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite serive:: createPost::error",error)

        }

    }


}

const service = new Services();
export default service