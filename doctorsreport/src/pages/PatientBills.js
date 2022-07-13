import React from 'react'

function PatientBills() {
  return (
   <>
   <div style={{backgroundColor:'aliceblue'}} className="vh-100">
    <div  className="row ">
    <div style={{backgroundColor:'white',marginTop:"10%",}} className="col-10 table-responsive rounded mx-auto ">
        <div className='h4 mt-3 text-uppercase text-center'>Billings</div>
    <table style={{marginTop:'5%',width:'90%'}}className=" mx-auto table ">
        <thead className="table-light">
            <tr>
                <td>Invoice NO</td>
                <td>Doctor's Name</td>
                <td>Date</td>
                <td>Amount</td>
                <td>Discount</td>
                <td>Total</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
        <tr className='align-middle' style={{height:"4rem"}}>
                <td>#1234</td>
                <td><span style={{cursor:"pointer"}} className='text-pointer text-primary '>Lucy James</span></td>
                <td>12/03/2022</td>
                <td>$300.00</td>
                <td>$5</td>
                <td>$295.00</td>
                <td>
                <i className="fa-solid fs-4 fa-cloud-arrow-down ms-2"></i>
                <i className="fa-solid fs-4  text-success  fa-eye ms-3"></i>
                <i className="fa-solid fs-4  text-primary  fa-print ms-3"></i>
                </td>
            </tr>
            <tr className='align-middle' style={{height:"4rem"}}>
                <td>#1234</td>
                <td><span style={{cursor:"pointer"}} className='text-pointer text-primary '>Lucy James</span></td>
                <td>12/03/2022</td>
                <td>$300.00</td>
                <td>$5</td>
                <td>$295.00</td>
                <td>
                <i className="fa-solid fs-4 fa-cloud-arrow-down ms-2"></i>
                <i className="fa-solid fs-4  text-success  fa-eye ms-3"></i>
                <i className="fa-solid fs-4  text-primary  fa-print ms-3"></i>
                </td>
            </tr>
            <tr className='align-middle' style={{height:"4rem"}}>
                <td>#1234</td>
                <td><span style={{cursor:"pointer"}} className='text-pointer text-primary '>Lucy James</span></td>
                <td>12/03/2022</td>
                <td>$300.00</td>
                <td>$5</td>
                <td>$295.00</td>
                <td>
                <i className="fa-solid fs-4 fa-cloud-arrow-down ms-2"></i>
                <i className="fa-solid fs-4  text-success  fa-eye ms-3"></i>
                <i className="fa-solid fs-4  text-primary  fa-print ms-3"></i>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    </div>

   </div>
   </>
  )
}

export default PatientBills