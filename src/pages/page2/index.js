import { useEffect, useState } from "react"
import axios from "axios";
import { Grid } from "@mui/material";


function UserList() {

    const [userData, setUserData] = useState([])

    const fetchUser = async () => {
        try {
            const response = await axios.get(
                'https://reqres.in/api/users'
            )
            setUserData(response.data.data);
            console.log(response.data.data);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <>
            {
                userData.map(item => (
                    <Grid
                        container
                        xs={12}
                        direction="row"
                        spacing={2}
                        alignItems="center"                      
                    >
                        <Grid >
                            <img src={item.avatar} />
                        </Grid>
                        <Grid item>
                            <h1>{item.first_name}</h1>
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default UserList