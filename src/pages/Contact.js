import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/CardComponent.tsx'; // Assuming Card is a custom component you've created
import { FooterComponent } from '../components/FooterComponent.tsx';

const Contact = () => {
  return (
    <>
    <Container>
      <Row className="my-5 justify-content-center">
        <Col lg={8} className="text-center">
          <h1>Contact Me</h1>
          <p>Please reach out to us with any questions or concerns you may have</p>
          <a href="mailto:marquismainville@gmail.com">marquismainville@gmail.com</a>
          <p>Or give me a call: <a href="tel:+6138046000">(613) 804-6000</a></p>
        </Col>
      </Row>

      <Row className="row-cols-1 row-cols-md-3 g-4 my-4 text-center">
        {/* LinkedIn Card */}
        <Col>
          <Card
            title="LinkedIn"
            text="Connect with us on LinkedIn."
            imageUrl="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png"
            linkUrl="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAA251_wBeT4noyeFgP7mpPG7tmzi_HHur_0&keywords=marquis%20mainville&origin=RICH_QUERY_SUGGESTION&position=0&searchId=cd2cf10b-52a5-420e-85e1-006777058d91&sid=sE.&spellCorrectionEnabled=false"
          />
        </Col>

        {/* Twitter Card */}
        <Col>
          <Card
            title="Facebook"
            text="Add us on Facebook."
            imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEVIWpb///9CVZQ0So7s7fN7hq9NXpnz9PhFV5VfbaE3TY85TpDW2eUxSI2yuM9GWJXQ0+FvfKlYaJ6bosHi5O2Bi7LHy9u8wdWGkLVlc6T4+furssuRmrujqsbp6vF1gKzd3+mOl7lqd6YYN4ao//rCAAAD8ElEQVR4nO3db3eaMBiH4RAcYGII/9Rqq7Xb9/+OwzpPt7MNo5g8T3J+95u1L0a5DkKEIIrsV03fFiKVirZvrjBx+aeWSlaWesWelq1GT/2bcNFp6nXykO4WV+GgKuq18ZJVw0W4UOm8PP/MqsWnsEtzC56rurOwTnEfvKbrUSip18JrMhONol4Jr6lG9Ilvw1606R5nzlWtKFIdKi7ZdN6KIoQQQgghhBBCCCH0YFZKrfLcGKX1+IMxJjd5rs6/aSllZaO+SGilMsX6sF0dy+yrfbk4Dqdms60P/cv7Uo74OJWVNrvDap/drhxinLeW5n3rorsUndBq+1redn0lIxOqYnMPLzqhlNs7fXEJrenv9kUllMXwADAioVo/4otIaF4fA0YjNPceQmMTmuY2JWrhDGAcQnP/KBiXUD8yDMYkrHZzgBEIrXY/j4hTmD88TkQirNp5QP5Cs0hcKN9mAtkLzV3n8xEK529C7sLZeyF34ewDKXuhnjkW8hfm84G8hfIldeEzXqS8hWbee27+wmr5BCDreQt555lvOZxWf3XiLLxjN9xvPpbG5OofMQaK3PUNzXFtNOfd7b8pR2BvIv3YkuuBZhftZwcdx/s20g04Jg8uwDrijw7q2kXI+lh5I6fBIuoP8KqVg3AX8SYU6nQbuDfUazmn3GFSexXxcWYUHm8Lo94Nnd60HeIdDIWb8CN54Tp54TcIWeckjPphCBBCyD8IIeQfhBDyD0II+QchhPyDEEL+pXGdpphIu1xNnFzCOVrfc26YmazMUxcSP102gHBLO3UTQEg8dRNASDyxEUC4pB0wAwg17Ty/fyH1PL9/4UA8z+9fuCGe5/cvpL6Twb+Q+nHy/oXUZ1f+hR3xTWH+hbRnFgGEJfVtb96FJ+rb3rwLqYdD/8LX5IVv1BeqvAvJv13Fu5D820e8C6kHC+/CBfWA711Ifxe4byHxpcQAQvq7wH0L6e8C9y38Tv6BGt9C6vHev5B8OPQtPJIPh76FDL630S735UQOiKn/vq/JD6Xnp8pO9MNhlrudWgAD4HRp3KkwFYQQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkX0BhQfMgm1BCWwiiJ9eFElatIHoYbyih7AXRc15CCVUjssS3YSaInoodSKjrUZh1FMeaMMKqy87CUhEMGEGEVpWfwmxQ4bdiCGGlhuwizMou+L4YQKi7z78hLgurpZJVyBerX6GtRk99WYq4Lq7p25CPrfUrLNq+uS7lJ/QwTAMtbH4fAAAAAElFTkSuQmCC"
            linkUrl="https://www.facebook.com/marquis.mainville?comment_id=Y29tbWVudDoxMDE1MzgxODEwNjE3OTgwOV8xMDE1MzgxODIyMTU0OTgwOQ%3D%3D"
          />
        </Col>

        {/* GitHub Card */}
        <Col>
          <Card
            title="Email"
            text="Send us an email"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png"
            linkUrl="mailto:marquismainville@gmail.com"
          />
        </Col>
      </Row>
    </Container>
<FooterComponent/>
    </>
  );
};

export default Contact;
