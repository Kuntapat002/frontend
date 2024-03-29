import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter();

  
//----------------------start handleSubmit--------------------------
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      studentid: data.get('txt_studentid'),
      firstname: data.get('txt_firstname'),
      lastname: data.get('txt_lastname'),
      username: data.get('txt_username'),
      password: data.get('txt_password'),
      status: data.get('txt_status')
    }

    // console.log("studentid", jsonData.studentid);
    // console.log("firstname", jsonData.firstname);
    // console.log("lastname", jsonData.lastname);
    // console.log("username", jsonData.username);
    // console.log("password", jsonData.password);
    // console.log("status", jsonData.status);

      fetch(`https://6961-49-229-108-181.ngrok-free.app/api/users`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          router.push('/dashboard')
        } else {
          console.log('Add Data Not Success')
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }; //end handleSubmit


  // if (session) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" href="/">Fortune Express</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="./">Home</Link>
                </li>
              </ul>
              {/* <div className="navbar-text ms-auto">
                {session.user.email}
                <button className="btn btn-danger ms-2" onClick={() => signOut()}>
                  Sign out
                </button>
              </div> */}
            </div>
          </div>
        </nav>
        
        <div className="container mt-5">
          <div className="card mt-4">
          <div className="card-header">
              <h5>Add Member</h5>
            </div>
            <div className="card-body">

            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="studentid" className="form-label">StudentID</label>
                <input type="text" className="form-control" name="txt_studentid" id="txt_studentid" />
              </div>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Firstname</label>
                <input type="text" className="form-control" name="txt_firstname" id="txt_firstname" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Lastname</label>
                <input type="text" className="form-control" name="txt_lastname" id="txt_lastname" />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="txt_username" id="txt_username" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="txt_password" id="txt_password" />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <input type="text" className="form-control" name="txt_status" id="txt_status" />
              </div>
              <button type="submit" className="btn btn-success me-2">Sign up</button>
              <Link href="/dashboard"><button type="button" className="btn btn-warning">Back</button></Link>
              
              
              </form>

            </div>
          </div>
        </div>
      </>
    );
  }

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <Link className="navbar-brand" href="/">My App</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" href="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" href="/about">About</Link>
//               </li>
//             </ul>
//             <div className="navbar-text ms-auto">
//               Not signed in
//               <button className="btn btn-primary ms-2" onClick={() => signIn()}>
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="container mt-5">
//         <p>Not signed in</p>
//         <button className="btn btn-primary" onClick={() => signIn()}>
//           Sign in
//         </button>
//       </div>
//     </>
//   );
// }
