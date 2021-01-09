import React from 'react';
import { Feature, OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';


export default function Home () {
    return (
        <>
            <HeaderContainer>
                <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Get Started</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
