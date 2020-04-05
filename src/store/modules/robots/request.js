export default {
    fetchRobots: async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const Jsonresp = await response.json();
            return Jsonresp;
        } catch(err){
            return err.message
        }
    }
}
