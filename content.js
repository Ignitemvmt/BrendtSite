// =====================================================
// EAGLE ROCK MINISTRIES - WEBSITE CONTENT
// Edit this file to update content across all pages
// =====================================================

const SITE_CONTENT = {

    // -------------------------------------------------
    // SITE-WIDE SETTINGS
    // -------------------------------------------------
    siteName: "Eagle Rock Ministries",
    tagline: "Eagle Rock Ministries",
    phone: "620-870-8801",
    email: "eaglerockministries@gmail.com",
    website: "brendtwills.org",
    address: {
        street: "2203 CR 4550",
        city: "Coffeyville",
        state: "Kansas",
        zip: "67337"
    },
    
    // Social Media Links
    social: {
        youtube: "https://www.youtube.com/@BrendtWills",
        facebook: "https://www.facebook.com/EagleRockMinistries/",
        instagram: "https://www.instagram.com/eagle_rock_ministries"
    },
    
    // Donation Links
    donations: {
        paypal: {
            name: "PayPal",
            url: "https://www.paypal.com/paypalme/freeandpowerful5714",
            icon: "paypal"
        },
        cashapp: {
            name: "Cash App",
            handle: "$BrendtWills",
            url: "https://cash.app/$BrendtWills",
            icon: "cashapp"
        },
        venmo: {
            name: "Venmo",
            handle: "@kimberly-wills-10",
            url: "https://account.venmo.com/u/kimberly-wills-10",
            icon: "venmo"
        }
    },
    
    // Footer
    footerVerse: '"Build up, build up, prepare the way of the Lord..." — Isaiah 57:14',
    copyright: "© 2025 Eagle Rock Ministries. All rights reserved.",

    // -------------------------------------------------
    // HOME PAGE
    // -------------------------------------------------
    home: {
        heroTitle: 'We Want to See You <span>Free and Powerful</span>',
        heroVerse: '"Build up, build up, prepare the way of the Lord, Remove every obstacle from the way of My people."',
        heroVerseRef: "— Isaiah 57:14",
        
        // About Section
        aboutTitle: "A Legacy of Faithful Ministry",
        aboutText: [
            'Brendt and Kim Wills have been involved in many aspects of ministry since <span class="highlight">1988</span>. They have served as pastors, youth pastors, in children\'s ministry, street ministry, and prayer counseling.',
            'The Wills have pastored <span class="highlight">Eagle Rock Ministries</span> in Coffeyville, Kansas since 2005. They have ministered in churches, home fellowships, small groups, prisons, parks, streets, and reservations.',
            'Today, Pastor Brendt oversees intercession ministry across <span class="highlight">9 counties in Kansas</span>, dedicated to prayer and spiritual awakening throughout the region.',
            'Isaiah 57:14 has been a life Scripture for Brendt and Kim—a calling to build up, prepare the way of the Lord, and remove every obstacle from the path of God\'s people.'
        ],
        familyNote: "Brendt and Kim, high school sweethearts, were married in 1986. They have one son, two daughters, six amazing and highly favored grandchildren, and one slightly spoiled Chihuahua.",
        
        // Ministry Approach
        approach: [
            { 
                title: "One on One", 
                description: "Personal ministry and discipleship",
                image: "ministry-prayer1.jpg"
            },
            { 
                title: "Spirit", 
                description: "Through worship and mentoring",
                image: "ministry-prayer2.jpg"
            },
            { 
                title: "Truth", 
                description: "Through teaching and study",
                image: "ministry-home.jpg"
            }
        ],
        
        // Donate CTA Section (new section on home page)
        donateCta: {
            title: "Partner With Our Ministry",
            subtitle: "Your generosity helps us continue building up and preparing the way of the Lord across Kansas and beyond.",
            methods: [
                { name: "PayPal", icon: "paypal" },
                { name: "Cash App", icon: "cashapp" },
                { name: "Venmo", icon: "venmo" },
                { name: "Check", icon: "mail" }
            ]
        },
        
        scriptureVerse: '"Stand by the ways and see and ask for the ancient paths, Where the good way is, and walk in it; Then you will find a resting place for your souls."',
        scriptureRef: "— Jeremiah 6:16a"
    },

    // -------------------------------------------------
    // IMPACT PAGE
    // -------------------------------------------------
    impact: {
        pageTitle: 'How We <span>Impact</span>',
        pageSubtitle: "Building up, preparing the way of the Lord across Kansas, the USA, and globally",
        
        stats: [
            { number: "37+", label: "Years of Ministry" },
            { number: "9", label: "Kansas Counties" },
            { number: "20+", label: "Years at Eagle Rock" }
        ],
        
        // Vision Section
        visionTitle: "Future Vision: Recovery Center in Coffeyville",
        visionText: [
            "We have a dream to establish a faith-based rehabilitation facility in Coffeyville, Kansas—a place where people struggling with addiction and life-controlling issues can find freedom, healing, and restoration through the power of Jesus Christ.",
            "This facility would provide a safe, Christ-centered environment for transformation, combining Biblical teaching, counseling, worship, and community support to help residents rebuild their lives.",
            "As we continue to build up and prepare the way of the Lord, we trust God to open doors and provide the resources needed to see this vision become reality."
        ],
        
        // Ministry Venues (keep to 8 for symmetric grid)
        venues: [
            "Churches",
            "Home Fellowships", 
            "Small Groups",
            "Conferences",
            "Prisons",
            "Parks & Streets",
            "Reservations",
            "International"
        ],
        
        // Traveling Ministry
        travelingTitle: "Across the USA",
        travelingText: [
            "Brendt and Kim travel throughout the United States to speak at churches, conferences, and ministry events. Their heart is to see believers set free and walking in the power of God.",
            "As they continue to grow in their calling, they are preparing for an even greater evangelistic ministry—reaching more people with the Gospel and equipping believers to walk in the fullness of what God has for them."
        ],
        
        // International Ministry
        internationalTitle: "International Missions",
        internationalText: [
            "Pastor Brendt has traveled abroad to <strong>Belize</strong> as a pastor, assisting with international intercession assignments and bringing Biblical teaching to communities hungry for the Word.",
            "Through these international missions, Pastor Brendt provides training, mentorship, and spiritual guidance to local churches—helping to equip leaders and believers for the work of the Kingdom."
        ]
    },

    // -------------------------------------------------
    // BOOKS PAGE
    // -------------------------------------------------
    books: {
        pageTitle: 'Books by <span>Pastor Brendt</span>',
        pageSubtitle: "Resources for spiritual growth and transformation",
        intro: "Pastor Brendt Wills has authored books designed to help believers grow in their faith, find freedom, and walk in the power of God. These resources come from years of ministry experience and a heart to see people transformed.",
        
        // Book List
        bookList: [
            {
                title: "SIN: Understanding How the Enemy Works",
                author: "Brendt Wills",
                description: "Gain insight into spiritual warfare and understand how the enemy operates. This book equips believers with Biblical knowledge to stand firm against the schemes of the devil and walk in victory.",
                amazonUrl: "https://www.amazon.com/SIN-Understanding-How-Enemy-Work-ebook/dp/B0F5X5N18D",
                color: "linear-gradient(135deg, #8B0000 0%, #DC143C 100%)"
            },
            {
                title: "Strategic Prayers: An Acrostic of the Lord's Prayer",
                author: "Brendt Wills", 
                description: "Discover a fresh approach to the Lord's Prayer through this creative acrostic study. Learn how to pray strategically and effectively as you deepen your prayer life and connection with God.",
                amazonUrl: "https://www.amazon.com/Strategic-Prayers-acrostic-lords-prayer-ebook/dp/B0DNNL5853",
                color: "linear-gradient(135deg, #1C2A4A 0%, #4169E1 100%)"
            },
            {
                title: "When Frenemies Attack: A Study in Psalms",
                author: "Brendt Wills",
                description: "Navigate difficult relationships through the wisdom of the Psalms. This study helps believers understand how to respond when those closest to them become sources of conflict and pain.",
                amazonUrl: "https://www.amazon.com/When-Frenemies-Attack-Study-Psalms-ebook/dp/B0865NQ7GS",
                color: "linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)"
            },
            {
                title: "The Weekly Reset",
                author: "Brendt Wills",
                description: "Have you ever had one of those weeks where everything goes wrong? Discover God's mechanism for resetting and starting fresh. This book explores the Biblical principle of rest and renewal.",
                amazonUrl: "https://www.amazon.com/Weekly-Reset-Brendt-Wills/dp/B0BR6GWKLB",
                color: "linear-gradient(135deg, #4B0082 0%, #8A2BE2 100%)"
            }
        ],
        
        authorNote: '"These books come from my heart and from years of walking with the Lord and ministering to His people. My prayer is that they will help you find freedom, grow in your faith, and become all that God has called you to be."',
        amazonAuthorPage: "https://www.amazon.com/stores/Brendt-Wills/author/B088JWV55Y"
    },

    // -------------------------------------------------
    // DONATE PAGE
    // -------------------------------------------------
    donate: {
        pageTitle: 'Partner With <span>Our Ministry</span>',
        pageSubtitle: "Your generosity helps us build up and prepare the way of the Lord",
        
        giveTitle: "Your Generosity Makes a Difference",
        giveVerse: '"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."',
        giveVerseRef: "— Luke 6:38",
        giveText: "Your generous donations help us continue our intercession ministry across the 9 counties of Kansas, the USA, and globally. Every gift makes a difference in building up and preparing the way for God's people.",
        
        // Online giving options
        onlineGiving: {
            title: "Give Online",
            subtitle: "Choose your preferred method"
        },
        
        // Mail option
        mailGiving: {
            title: "Give by Mail",
            description: "Make checks payable to Eagle Rock Ministries and mail to:"
        },
        
        // Where giving goes
        visionAreas: [
            {
                title: "Local Intercession Ministry",
                description: "Supporting prayer and intercession work across 9 counties in Kansas, bringing spiritual awakening to our communities."
            },
            {
                title: "Traveling & International Ministry", 
                description: "Enabling Pastor Brendt and Kim to travel across the USA and internationally to speak, teach, and minister at churches and conferences."
            },
            {
                title: "Future Rehab Facility",
                description: "Building toward our vision of establishing a faith-based rehabilitation facility in Coffeyville to help those struggling find freedom in Christ."
            }
        ],
        
        thankYouTitle: "Thank You",
        thankYouText: "Your partnership means the world to us. Together, we are building up and preparing the way of the Lord. May God bless you abundantly for your generosity."
    },

    // -------------------------------------------------
    // CONTACT PAGE
    // -------------------------------------------------
    contact: {
        pageTitle: 'Get In <span>Touch</span>',
        pageSubtitle: "We'd love to hear from you",
        
        speakingTitle: "Invite Pastor Brendt to Speak",
        speakingText: [
            "Pastor Brendt is available to travel and speak at churches, conferences, retreats, and special events across the United States and internationally.",
            "With over 37 years of ministry experience, Pastor Brendt brings powerful teaching on intercession, spiritual freedom, and walking in the power of God. He and Kim have a heart to see believers set free and equipped to fulfill their calling.",
            "Whether you're looking for a guest speaker for a Sunday service, a weekend revival, a conference session, or a special event, Pastor Brendt would be honored to minister to your congregation."
        ],
        
        speakingTopics: [
            "Intercession & Prayer",
            "Spiritual Freedom",
            "Identity in Christ",
            "Biblical Teaching",
            "Revival & Awakening",
            "Marriage & Family"
        ],
        
        contactInfoTitle: "Contact Information",
        contactInfoText: "Whether you have a prayer request, want to learn more about our ministry, are interested in partnering with us, or would like to invite Pastor Brendt to speak, please reach out.",
        
        emailCtaTitle: "Send Us a Message",
        emailCtaText: "Click the button below to open your email app and send us a message directly. We look forward to hearing from you!"
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.SITE_CONTENT = SITE_CONTENT;
}
