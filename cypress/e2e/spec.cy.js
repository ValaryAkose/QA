describe('IvhuRedu Website Navigation and UI Verification', () => {
  
  const url = 'https://nyeredzi-informational-website.vercel.app/';

  beforeEach(() => {
    cy.visit(url);
  });


  it('1.should verify the homepage visual elements and main headers', () => {
  
    cy.get('img[alt*="vhuRedu"]').should('be.visible');

    
    cy.contains('Helping Farmers Protect Their Land').should('be.visible');
    
    
    cy.contains('IvhuRedu helps farmers connect with Agritex officers').should('be.visible');
  });


  it('2.should verify navigation menu links exist and are interactive', () => {
    const navLinks = ['Home', 'About Us', 'How It Works', 'Our Team', 'Contact Us'];
    
    navLinks.forEach((linkText) => {
      cy.get('nav, header').contains(linkText).should('be.visible');
    });
  });

  it('3.should verify primary action buttons exist', () => {

    cy.contains('a, button', 'Learn More')
      .should('be.visible')
      .and('not.be.disabled');


    cy.contains('a, button', 'Get Started')
      .should('be.visible')
      .and('not.be.disabled');
  });

    it('4.should navigate to Contact Us section/page upon click', () => {
    cy.contains('Contact Us').click();
    cy.url().should('include', 'contact'); 
  });

  it('5.should verify the homepage visual elements and main headers', () => {
    cy.get('img[alt*="vhuRedu"]').should('be.visible');
    cy.contains('Helping Farmers Protect Their Land').should('be.visible');
    cy.contains('IvhuRedu helps farmers connect with Agritex officers').should('be.visible');
  });

  it('6.should verify navigation menu links exist and are interactive', () => {
    const navLinks = ['Home', 'About Us', 'How It Works', 'Our Team', 'Contact Us'];
    navLinks.forEach((linkText) => {
      cy.get('nav, header').contains(linkText).should('be.visible');
    });
  });

  it('7.should verify the Our Team section text content and profile cards', () => {
    cy.contains('h2, h3, .section-title', 'Our Team').should('be.visible');
    cy.contains('We are the team behind IvhuRedu. We worked together to build this project').should('be.visible');

    const teamMembers = [
      'Umwali Angelique',
      'Claire Panashe Tsuro',
      'Helen Mezgebe Tedla',
      'Gahire Nsenga Jolie',
      'Sibandze Kababa Sizolwethu'
    ];

    teamMembers.forEach((name) => {
      cy.contains('[class*="team"], [class*="card"], div', new RegExp(name.split(' ').join('.*'), 'i'))
        .should('be.visible');
    });

    cy.get('[class*="team"], [class*="card"], div')
      .contains('Full-stack developer')
      .should('be.visible');

  });

  it('8.Should validate the main hero typography color and contrast', () => {
    cy.contains('h1, h2', 'Helping Farmers Protect Their Land')
      .should('have.css', 'color')
      .and('match', /rgb\(255,\s*255,\s*255\)|rgba\(255,\s*255,\s*255/); // White #FFFFFF
  })

  it('9.should trigger correct action when clicking Get Started', () => {
    cy.contains('Get Started').click();

  });

  it('10.Should validate the global header navigation bar background color', () => {
    cy.get('header.top')
      .should('have.css', 'background-color', 'rgb(0, 106, 32)');
  });

  it('11.Should validate the secondary call-to-action button color styling', () => {
    cy.contains('a, button', 'Get Started')
      .should('be.visible')
      .and('have.css', 'background-color')
      .and('not.equal', 'rgba(0, 0, 0, 0)'); 

    cy.contains('a, button', 'Get Started')
      .should('have.css', 'color')
      .and('match', /rgb\(255,\s*255,\s*255\)/); 
  });

  })
