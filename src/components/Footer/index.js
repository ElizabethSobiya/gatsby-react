import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, SocialIcon,SocialIcons, SocialMedia, SocialIconLink, SocialLogo, SocialMediaWrap, WebsiteRights } from './FooterElement';

const Footer =()=>{
    return (
        <>
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to ='/'>
                       <SocialIcon/>
                        EXPLORE
                    </SocialLogo>
                    <WebsiteRights>EXPLORE &copy; {new Date().getFullYear()}
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href = '/' target = "_blank" arial_label ='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href = '/' target = "_blank" arial_label ='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href = '/' target = "_blank" arial_label ='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href = '/' target = "_blank" arial_label ='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href = '/' target = "_blank" arial_label ='LinkedIn'>
                            <FaLinkedinIn/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
        </>
    )
}

export default Footer