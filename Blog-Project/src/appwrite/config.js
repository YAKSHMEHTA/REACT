import conf from "../conf/conf"
import {ID,Client,Dadabase,Storage,Query, Databases} from "appwrite"

export class Service{
    client = new Client()
    database 
    bucket
    constructor() {
        this.client
      .setEndpoint(conf.appwrite.endpoint) // Your Appwrite Endpoint
      .setProject(conf.appwrite.projectId); // Your project ID

        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(){
        
    }

}


const service = new Service()
export default service 