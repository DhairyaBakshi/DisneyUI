
import styled from "styled-components";

const Login = (props) => {
    return(
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt ="http://www.w3.org/2000/svg" />
                <SignUp ><a href ="http://localhost:3000/home">GET IT ALL THERE </a></SignUp>
                <Description>Get Premier Acess to Laal Singh Chaddha and Raksha Bandhan for
                an additional fee with a Disney+ subscription. As of 
                08/10/22, the price of Disney+ and The Disney Bundle
                will increase by Rs 100.   
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
            </CTA>
            <BgImage/>
        </Content>
    </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vh ;
width : 100% ;
position : relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-item: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
background-image: url("/images/login-background.jpg");
`;

const BgImage = styled.div`
width : 100%;
height : calc(100vh-70px);
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
bottom: 0;
right: 0;
z-index: -1;
`;

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
align-item: center;
margin-top:0;
text-align: center;
justify-content: center;
margin-right: auto;
margin-left: auto;
`;

const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height: 1px;
display: block;
width : 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size:18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
&:hover{
    background-color: #0483ee
}
`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width : 100%;
`;

export default Login;
