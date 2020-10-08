import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg4.svg'
import Icon3 from '../../images/svg5.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Out services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help you reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Officies</ServicesH2>
                    <ServicesP>You can access our platform anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock out special membership card that returns 5% cashback.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
