const PatientsList = () => {

    return (
        <>
            <div className="w-100">
                <h5 className="text-center my-2">Welcome Admin</h5>
                <div className="w-100 card" id="appointSubDiv">
                    <h6 className="text-center">These are the list of patients in the hospital</h6> 
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Address</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Ailment</th>
                                <th scope="col">NOK</th>
                                <th scope="col">NOK contact info</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark Twain</td>
                                <td>Male</td>
                                <td>25</td>
                                <td>Ogbomosho</td>
                                <td>123-456-789</td>
                                <td>Malaria</td>
                                <td>Mrs Twain</td>
                                <td>123-456-789</td>

                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark Twain</td>
                                <td>Male</td>
                                <td>25</td>
                                <td>Ogbomosho</td>
                                <td>123-456-789</td>
                                <td>Malaria</td>
                                <td>Mrs Twain</td>
                                <td>123-456-789</td>

                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark Twain</td>
                                <td>Male</td>
                                <td>25</td>
                                <td>Ogbomosho</td>
                                <td>123-456-789</td>
                                <td>Malaria</td>
                                <td>Mrs Twain</td>
                                <td>123-456-789</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
export default PatientsList