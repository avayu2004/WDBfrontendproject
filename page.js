import Navbar from "./navbar.js";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <h2> 
            {" "}
         </h2>
         <br></br>
         <div
            class = "image"
            style = {{
               height: "950px",
               width: "1150px",
               backgroundImage:
               'url("https://s3-alpha-sig.figma.com/img/2c56/edd9/75b7720b30a5ecc2b10830592caa2c19?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eDLstmL88jcMxV52ppA-OePLtYdaFyk5pVFdIrT6w-o5zP9nm6eROdRpf3WGWie0VzqVxUGnpDL1YbAawXT-~TV0kuU41LGpA8ggvl8j5lWl0XWCRhKeY9y5pR2wnVa4mqZsJjzphFWjhPqAH-7Lmw6SfkxhLTrDhat-woZzkEl75uoeJQ8YzGTtII4AWq-dNo4KnWWgbavC57CXf2nK-lfOFZHb~KcizrJTG9ud7bprkjvOLjmnsy6PwEYZlVeP7fVWdwYqLGmDeGtYk21EL2IYyE3zlyDboq5N-ExummTaU5wxt5NhoR5olkuaTSIwHJbKSVPxfP1-JeVCcTCvsg__")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
            }}
         >
          <div>
            Taylor Swift on Tour
          </div>
          <div>
                <button>
                    <li><a href="./merch.js">See Her Perform</a></li>
                </button>
                
            </div>

         </div>
    </div>
  );
}
