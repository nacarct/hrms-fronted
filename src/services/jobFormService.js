import axios from 'axios'

export default class productService{
    getJobForms(){
        return axios.get("http://localhost:8080/api/jobforms/getAll")
    }
}