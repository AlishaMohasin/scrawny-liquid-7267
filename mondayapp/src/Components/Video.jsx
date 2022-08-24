import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import style from "./Video.module.css";

const Video = () => {
  return (
    <div className={style.main}>
      <Box>
        <h1 className={style.h1}>
          Streamline your work for
          <br />
          <span className={style.span}>maximum productivity</span>
        </h1>
        <h1 className={style.h11}>
          Centralize all your work, processes, tools, and files into
          <br /> one Work OS. Connect teams, bridge silos, and <br />
          maintain one source of truth across your organization.
        </h1>

        <Box display="flex">
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg"
            width="100px"
            className={style.img}
          />
          <h1 className={style.h12}>
            “ We use monday.com for a plethora of use cases, the
            <br />
            opportunities this platform provides are limitless.”
            <br />
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>
              Jane Tham | VP of Collaboration Technologies
            </span>
            <br />
            Universal Music Group
          </h1>
        </Box>
        <h1 className={style.h1}>
          Bring teams together to
          <br />
          <span className={style.span}>drive business impact</span>
        </h1>
        <h1 className={style.h11}>
          Collaborate effectively organization-wide to get a<br />
          clear picture of all your work. Stay in the loop with <br />
          easy-to-use automations and real-time notifications.
        </h1>

        <Box display="flex">
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/sarah.jpeg"
            width="100px"
            className={style.img}
          />
          <h1 className={style.h12}>
            “ Since adopting monday.com, our global marketing
            <br />
            department has seen a 40% improvement.”
            <br />
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>
              Sarah Pharr | AVP Marketing |
            </span>
            <br />
            Genpact
          </h1>
        </Box>
      </Box>
          <Box>
              
          <video width="520" height="440" controls   style={{marginLeft:"80px",marginTop:"30px",boxshadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
  <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/goals_dashboard.mp4" type="video/mp4"/>
 

</video>
      </Box>
    </div>
  );
};

export default Video;
