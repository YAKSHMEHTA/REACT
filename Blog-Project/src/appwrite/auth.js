import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';



export class AuthService {
    client = new Client();
    account;
  constructor() {
    this.client
      .setEndpoint(conf.appwrite.endpoint) // Your Appwrite Endpoint
      .setProject(conf.appwrite.projectId); // Your project ID

    this.account = new Account(this.client);
  }

  // Sign up a new user
  async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if(userAccount && userAccount.$id) {
        // Automatically log in the user after successful sign-up
        await this.logIn(email, password);
      }else{
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // Log in an existing user
  async logIn(email, password) {
    try {
        return await this.account.createEmailSession(email, password);
    }catch (error) {
        throw error;
    }
  }

  // Log out the current user
  async logOut() {
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        throw error;
    }
  }

  // Get the current logged-in user
  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        throw error;
    }
    return null;
  }
}

console.log("fes")

export const authService = new AuthService(); 

export default authService;