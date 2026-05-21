window.DeckData = {
  decks: {
    opportunities: {
      label: 'Opportunities',
      color: '#d11a1a',
      description: 'Angel/partner investor pitch — equity + royalty model',
      audience: 'Investors seeking $250K–$500K placement'
    },
    crowdfunding: {
      label: 'Crowdfunding',
      color: '#3a9928',
      description: 'Backer-focused campaign deck — product, rewards, stretch goals',
      audience: 'Kickstarter/crowdfunding backers'
    },
    internal: {
      label: 'Master Plan',
      color: '#0c4f8d',
      description: 'Full master deck with all slides and deck-membership indicators',
      audience: 'Internal team reference'
    },
    press: {
      label: 'Press Kit',
      color: '#9b59b6',
      description: 'Media-ready overview — quotable stats, visual assets, company story',
      audience: 'Journalists, YouTubers, content creators'
    },
    partner: {
      label: 'Retail Partner',
      color: '#e67e22',
      description: 'B2B pitch — margins, logistics, co-marketing, product line',
      audience: 'Distributors, FLGS owners, retail buyers'
    },
    expo: {
      label: 'Expo Loop',
      color: '#1abc9c',
      description: 'Auto-advancing booth display — heavy visuals, QR codes, no narration',
      audience: 'Convention attendees passing a booth or kiosk'
    },
    hiring: {
      label: 'Join Us',
      color: '#f39c12',
      description: 'Culture, mission, roles, and what working here looks like',
      audience: 'Potential hires and collaborators'
    },
    product: {
      label: 'Product Launch',
      color: '#e74c3c',
      description: 'Per-game or per-mod focused — what it is, why it matters, how to get it',
      audience: 'Potential customers at launch'
    }
  },

  slideOrder: [
    '01-title',
    '02-mission',
    '03-nukes',
    '04-hexes',
    '05-online-engine',
    '06-bots',
    '07-pipeline',
    '08-vision',
    '09-market-size',
    '10-business-models',
    '11-beyond-hexes',
    '12-go-to-market-mods',
    '13-chess',
    '14-dungeon-chess',
    '15-milestones',
    '16-why-not-them',
    '17-team',
    '18-use-of-funds',
    '19-the-ask',
    '20-contact',
    '21-pledge-tiers',
    '22-fulfilment',
    '23-stretch-goals',
    '24-social-proof',
    '25-why-back-us',
    '26-current-status',
    '27-blockers',
    '28-responsibilities',
    '29-quick-facts',
    '30-story-angles',
    '31-assets',
    '32-retail-proposition',
    '33-product-line',
    '34-logistics',
    '35-play-now',
    '36-what-is-this',
    '37-community',
    '38-how-we-work',
    '39-open-roles',
    '40-what-you-get',
    '41-in-the-box',
    '42-how-to-play',
    '43-get-it'
  ],

  slides: {
    '01-title': {
      title: 'Title',
      theme: 'cosmic',
      decks: ['opportunities', 'internal', 'crowdfunding', 'press', 'partner', 'expo', 'hiring', 'product']
    },
    '02-mission': {
      title: 'Mission',
      theme: 'dark',
      decks: ['opportunities', 'internal', 'crowdfunding', 'press', 'hiring']
    },
    '03-nukes': {
      title: 'Nukes',
      theme: 'dark',
      decks: ['opportunities', 'internal', 'crowdfunding', 'press', 'partner', 'expo', 'product']
    },
    '04-hexes': {
      title: 'Hexes',
      theme: 'ivory',
      decks: ['opportunities', 'internal', 'crowdfunding', 'expo']
    },
    '05-online-engine': {
      title: 'Online engine',
      theme: 'cosmic',
      decks: ['opportunities', 'internal', 'crowdfunding', 'press', 'expo']
    },
    '06-bots': {
      title: 'Bots',
      theme: 'ivory',
      decks: ['opportunities', 'internal']
    },
    '07-pipeline': {
      title: 'Pipeline',
      theme: 'ivory',
      decks: ['opportunities', 'internal']
    },
    '08-vision': {
      title: 'Vision',
      theme: 'cosmic',
      decks: ['opportunities', 'internal']
    },
    '09-market-size': {
      title: 'Market size',
      theme: 'ivory',
      decks: ['opportunities', 'internal', 'partner']
    },
    '10-business-models': {
      title: 'Business models',
      theme: 'ivory',
      decks: ['opportunities', 'internal', 'partner']
    },
    '11-beyond-hexes': {
      title: 'Beyond hexes',
      theme: 'dark',
      decks: ['opportunities', 'internal']
    },
    '12-go-to-market-mods': {
      title: 'Go-to-market mods',
      theme: 'ivory',
      decks: ['opportunities', 'internal', 'partner']
    },
    '13-chess': {
      title: 'Chess',
      theme: 'ivory',
      decks: ['opportunities', 'internal', 'crowdfunding', 'press', 'expo', 'product']
    },
    '14-dungeon-chess': {
      title: 'Dungeon Chess',
      theme: 'dark',
      decks: ['opportunities', 'internal', 'crowdfunding', 'expo', 'product']
    },
    '15-milestones': {
      title: 'Milestones',
      theme: 'ivory',
      decks: ['opportunities', 'internal', 'crowdfunding']
    },
    '16-why-not-them': {
      title: 'Why not them',
      theme: 'ivory',
      decks: ['opportunities', 'internal']
    },
    '17-team': {
      title: 'Team',
      theme: 'ivory',
      decks: ['opportunities', 'internal', 'crowdfunding', 'press', 'hiring']
    },
    '18-use-of-funds': {
      title: 'Use of funds',
      theme: 'dark',
      decks: ['opportunities', 'internal']
    },
    '19-the-ask': {
      title: 'The ask',
      theme: 'ivory',
      decks: ['opportunities', 'internal']
    },
    '20-contact': {
      title: 'Contact',
      theme: 'cosmic',
      decks: ['opportunities', 'internal', 'crowdfunding', 'press', 'partner', 'hiring', 'product']
    },
    '21-pledge-tiers': {
      title: 'Pledge tiers',
      theme: 'ivory',
      decks: ['crowdfunding']
    },
    '22-fulfilment': {
      title: 'Fulfilment',
      theme: 'cosmic',
      decks: ['crowdfunding']
    },
    '23-stretch-goals': {
      title: 'Stretch goals',
      theme: 'ivory',
      decks: ['crowdfunding']
    },
    '24-social-proof': {
      title: 'Social proof',
      theme: 'dark',
      decks: ['crowdfunding', 'press', 'partner']
    },
    '25-why-back-us': {
      title: 'Why back us',
      theme: 'cosmic',
      decks: ['crowdfunding']
    },
    '26-current-status': {
      title: 'Current status',
      theme: 'ivory',
      decks: ['internal']
    },
    '27-blockers': {
      title: 'Blockers',
      theme: 'dark',
      decks: ['internal']
    },
    '28-responsibilities': {
      title: 'Responsibilities',
      theme: 'ivory',
      decks: ['internal']
    },
    '29-quick-facts': {
      title: 'Quick facts',
      theme: 'ivory',
      decks: ['press', 'internal']
    },
    '30-story-angles': {
      title: 'Story angles',
      theme: 'dark',
      decks: ['press', 'internal']
    },
    '31-assets': {
      title: 'Assets',
      theme: 'ivory',
      decks: ['press', 'internal']
    },
    '32-retail-proposition': {
      title: 'Retail proposition',
      theme: 'ivory',
      decks: ['partner', 'internal']
    },
    '33-product-line': {
      title: 'Product line',
      theme: 'ivory',
      decks: ['partner', 'internal']
    },
    '34-logistics': {
      title: 'Logistics',
      theme: 'dark',
      decks: ['partner', 'internal']
    },
    '35-play-now': {
      title: 'Play now',
      theme: 'cosmic',
      decks: ['expo', 'internal']
    },
    '36-what-is-this': {
      title: 'What is this',
      theme: 'dark',
      decks: ['expo', 'internal']
    },
    '37-community': {
      title: 'Community',
      theme: 'dark',
      decks: ['expo', 'internal']
    },
    '38-how-we-work': {
      title: 'How we work',
      theme: 'dark',
      decks: ['hiring', 'internal']
    },
    '39-open-roles': {
      title: 'Open roles',
      theme: 'ivory',
      decks: ['hiring', 'internal']
    },
    '40-what-you-get': {
      title: 'What you get',
      theme: 'cosmic',
      decks: ['hiring', 'internal']
    },
    '41-in-the-box': {
      title: 'In the box',
      theme: 'ivory',
      decks: ['product', 'internal']
    },
    '42-how-to-play': {
      title: 'How to play',
      theme: 'dark',
      decks: ['product', 'internal']
    },
    '43-get-it': {
      title: 'Get it',
      theme: 'cosmic',
      decks: ['product', 'internal']
    }
  }
};
