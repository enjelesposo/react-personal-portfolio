import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import Socials from '../components/socials';


export function SocialsContainer() {
    return <>
        <Socials>

            <Socials.LinkBorder>
                <Socials.Link href="https://www.facebook.com/esposoa/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </Socials.Link> 
            </Socials.LinkBorder>

            <Socials.LinkBorder>
                <Socials.Link href="https://twitter.com/45degEnjel" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Socials.Link>
            </Socials.LinkBorder>

            <Socials.LinkBorder>
                <Socials.Link href="#"  target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </Socials.Link>
            </Socials.LinkBorder>

            <Socials.LinkBorder>
                <Socials.Link href="https://github.com/enjelesposo"  target="_blank">
                    <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                </Socials.Link>
            </Socials.LinkBorder>

        </Socials>
    </>
}