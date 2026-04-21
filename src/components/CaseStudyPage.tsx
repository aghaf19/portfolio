import parkingImage from 'figma:asset/6c0ebf02114095428ead89bb5d57b9e9494afa0c.png';
import dashboardImage from 'figma:asset/c7ae2b36c06dd2ea5c7caf6aec9d07c6a33e8c7a.png';
import taskImage from 'figma:asset/e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.png';
import recipeImage from 'figma:asset/c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4.png';
import portfolioImage from 'figma:asset/b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.png';
import socialImage from 'figma:asset/a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8.png';
import musicImage from 'figma:asset/d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5.png';
import weatherImage from 'figma:asset/f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7.png';
import fitnessImage from 'figma:asset/b4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3.png';
import travelImage from 'figma:asset/a3c4e5f6b7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.png';
import ecommerceImage from 'figma:asset/f0e93d2e3acfb4e3d9cc0e2f7ad10cefb1d7f55f.png';
import bankingImage from 'figma:asset/77068ca76b9d5764fb49b28e4fe1c06a2e1d6b7c.png';
import { useParams, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Clock, Users, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: "parking-management",
    title: "Parking Management System",
    client: "Smart City Solutions",
    subtitle: "A clear and efficient interface for managing parking slots, entries, and digital payments.",
    description: "The Parking Management System was designed to help users locate, reserve, and manage parking spaces while giving administrators control over occupancy, entry logs, and payments. My role involved the complete UX/UI process, including research, flow design, wireframes, high-fidelity UI, and interaction design.",
    problem: "Users struggled with finding available parking spaces, understanding occupancy status, and navigating complex gate-entry systems. Administrators also had difficulty tracking real-time usage, payments, and space availability due to scattered data and outdated systems.",
    goals: [
      "Improve clarity of real-time parking slot availability",
      "Simplify booking and payment processes for users",
      "Provide a centralized dashboard for administrators",
      "Reduce confusion in navigating entry/exit flows",
    ],
    targetUsers: [
      "Daily commuters",
      "Visitors seeking short-term parking",
      "Parking lot administrators",
      "Security personnel",
    ],
    researchInsights: [
      "Users want fast, clear visibility of available parking slots.",
      "Payment steps were considered too long and confusing.",
      "Admins needed a simple dashboard to monitor occupancy and revenue.",
      "Users preferred guided steps rather than free exploration.",
    ],
    informationArchitecture: {
      userApp: [
        "Home (Availability Map)",
        "Reserve Spot",
        "Entry QR / Ticket",
        "Payment History",
        "Account",
      ],
      adminDashboard: [
        "Live Occupancy",
        "Incoming/Outgoing Logs",
        "Financial Overview",
        "Issues & Alerts",
      ],
    },
    wireframes: [
      "A clean map view showing availability with color-coded indicators",
      "A simplified three-step reservation process",
      "An admin panel with modular card-style analytics",
    ],
    visualDesign: [
      "Green/Red slot indicators for instant clarity",
      "Simple card-based dashboard for admin use",
      "A modern, minimal UI with strong hierarchy",
      "Clear CTAs to guide users through booking and payments",
    ],
    challenges: [
      {
        challenge: "Users couldn't understand which slots were occupied.",
        solution: "Introduced a visual map with color-coded availability.",
      },
      {
        challenge: "Admins struggled with scattered data.",
        solution: "Built a clean dashboard with occupancy, revenue, and logs in one place.",
      },
      {
        challenge: "Payment flow felt long.",
        solution: "Reduced steps from 5 → 3 with guided navigation.",
      },
    ],
    finalOutcome: "The final design provides a smooth, intuitive parking experience, supporting both users and administrators with clarity and real-time updates.",
    impact: [
      "Reduced reservation steps by 40%",
      "Users reported faster decision-making",
      "Admins gained clearer control over operations",
      "Modern interface increased overall usability",
    ],
    learnings: "This project strengthened my ability to simplify complex systems into clean user flows. I learned how important it is to visualize data clearly and to support multiple user types within the same system.",
    image: parkingImage,
    tags: ["SaaS", "Dashboard", "IoT", "UI/UX Design", "Data Visualization"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "pharmacy-app",
    title: "Pharmacy Application",
    client: "HealthCare Pharmacy",
    subtitle: "A simple and intuitive way for users to order medicines and manage prescriptions.",
    description: "The Pharmacy Application was designed to simplify the process of browsing medicines, uploading prescriptions, and receiving home delivery. My role included user flows, UI design, and building a clear, accessible experience for people of all ages.",
    problem: "Users often face confusion when navigating pharmacy apps due to overcrowded interfaces, hard-to-find categories, complicated prescription upload processes, and poor clarity when choosing between generics and branded medicine. Pharmacy staff also struggled with inefficient backend order management.",
    goals: [
      "Make medicine discovery simple and intuitive",
      "Create a frictionless prescription upload flow",
      "Ensure a safe, accessible interface for elderly users",
      "Build an efficient dashboard for pharmacists to manage orders",
    ],
    targetUsers: [
      "Patients who order medicine regularly",
      "Elderly users needing a simple experience",
      "Users with chronic conditions",
      "Pharmacists managing inventory & orders",
    ],
    researchInsights: [
      "Elderly users struggle with small text and complex navigation.",
      "Many users prefer search-first navigation due to urgency.",
      "Pharmacists need a quick way to verify prescriptions.",
      "Users want clear labels for substitutes and generics.",
    ],
    informationArchitecture: {
      userApp: [
        "Home",
        "Search",
        "Categories",
        "Upload Prescription",
        "Order Tracking",
        "Profile",
      ],
      adminDashboard: [
        "Incoming Orders",
        "Prescription Verification",
        "Inventory Management",
        "Sales Analytics",
      ],
    },
    wireframes: [
      "A search-centric homepage",
      "Large accessible UI elements",
      "Step-by-step prescription upload",
      "Card-style layouts for clarity",
    ],
    visualDesign: [
      "Soft colors for healthcare trust",
      "Accessible typography (large, high-contrast)",
      "Clear pill-shaped buttons",
      "Easy comparison layout for medicine alternatives",
    ],
    challenges: [
      {
        challenge: "Elderly users had difficulty reading small text.",
        solution: "Added larger text defaults + adjustable accessibility options.",
      },
      {
        challenge: "Prescription uploads confused users.",
        solution: "Added a 3-step guided upload with automatic cropping suggestions.",
      },
      {
        challenge: "Pharmacists struggled to verify orders quickly.",
        solution: "Built a streamlined 'Verify & Complete' panel with preview mode.",
      },
    ],
    finalOutcome: "The final design offers a clean, accessible pharmacy app that supports both customers and pharmacists, reducing confusion and increasing efficiency.",
    impact: [
      "Prescription upload success rate increased by 70%",
      "Faster pharmacist verification",
      "Clearer medicine browsing experience",
      "Improved accessibility for elderly users",
    ],
    learnings: "This project reinforced the importance of designing for accessibility and clarity in healthcare settings. Small UI decisions can significantly impact trust and usability.",
    image: dashboardImage,
    tags: ["Healthcare", "Mobile App", "E-commerce", "Accessibility", "UI/UX Design"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "fairplay-gaming",
    title: "FairPlay Gaming Dashboard",
    client: "FairPlay Gaming",
    subtitle: "A clean, data-driven dashboard that visualizes key gaming analytics and user activity.",
    description: "The FairPlay Gaming Dashboard was designed to help gamers track performance, monitor stats, and manage account data across multiple games in real time. My role covered UX flows, dashboard structure, data visualization, UI design, and interaction patterns suited for gaming audiences.",
    problem: "Gaming dashboards are often overloaded with data, visually chaotic, confusing for casual players, and missing clear hierarchy. FairPlay wanted a clean, modern, readable dashboard without losing the energetic, gaming-inspired feel.",
    goals: [
      "Make complex gaming data easy to understand",
      "Provide real-time performance updates",
      "Reduce visual noise while keeping a gaming aesthetic",
      "Improve navigation between multiple game profiles",
      "Support a variety of player types (casual → competitive)",
    ],
    targetUsers: [
      "Competitive gamers",
      "Casual players",
      "Tournament participants",
      "Game administrators",
    ],
    researchInsights: [
      "Players want quick-glance insights (wins, rank, XP, K/D).",
      "Data overload decreases engagement.",
      "Users prefer 'light-dark hybrid' themes for readability.",
      "Charts should be simple, not overly detailed.",
    ],
    informationArchitecture: {
      userApp: [
        "Overview",
        "Live Performance",
        "Match History",
        "Rewards & Achievements",
        "Friends & Activity",
        "Account Settings",
      ],
      adminDashboard: [
        "Player Analytics",
        "Game Statistics",
        "Revenue Tracking",
        "User Reports",
      ],
    },
    wireframes: [
      "Modular cards for each stat",
      "A collapsible side navigation",
      "Large charts for long-term insights",
      "Quick-access row for real-time data",
    ],
    visualDesign: [
      "Neon-accent colors against dark backgrounds",
      "Modular card system for consistency",
      "Rounded corners & subtle gradients for modern gaming feel",
      "Smooth micro-interactions for hover and transitions",
    ],
    challenges: [
      {
        challenge: "Too much data overwhelmed players.",
        solution: "Prioritized KPIs with a clear hierarchy and modular layout.",
      },
      {
        challenge: "Players needed real-time information.",
        solution: "Integrated live-update UI elements with subtle animations.",
      },
      {
        challenge: "Needed a gaming look without clutter.",
        solution: "Used clean spacing, consistent indicators, and minimal grids.",
      },
    ],
    finalOutcome: "The dashboard balances clarity with a gaming aesthetic, giving players fast access to the stats they care about while reducing visual overload.",
    impact: [
      "Improved player readability and quick decision-making",
      "Reduced navigation time by 30%",
      "Increased engagement with stats and achievements",
      "Provided a more unified and polished gaming environment",
    ],
    learnings: "I learned how to manage complex data within a visually bold UI without compromising clarity. The challenge pushed me to refine information hierarchy and lightweight data visualization.",
    image: taskImage,
    tags: ["Gaming", "Dashboard", "Analytics", "Data Visualization", "UI/UX Design"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "food-delivery",
    title: "Food Delivery Application",
    client: "QuickEats",
    subtitle: "A streamlined ordering flow with easy menu browsing, fast checkout, and real-time tracking.",
    description: "This food delivery application was designed to provide users with a seamless experience from restaurant discovery to meal delivery. My work included user research, flow optimization, menu interface design, checkout simplification, and real-time order tracking visualization.",
    problem: "Users faced challenges with overwhelming restaurant choices, complicated menu navigation, lengthy checkout processes, unclear delivery status updates, and difficulty in customizing orders. The platform needed to be fast, intuitive, and transparent.",
    goals: [
      "Simplify restaurant and menu discovery",
      "Reduce checkout friction and time",
      "Provide clear real-time delivery tracking",
      "Enable easy meal customization",
      "Build trust through transparency in pricing and timing",
    ],
    targetUsers: [
      "Busy professionals ordering lunch/dinner",
      "Families ordering group meals",
      "Students seeking affordable options",
      "Users with dietary restrictions",
    ],
    researchInsights: [
      "Users abandon apps with more than 3 checkout steps.",
      "Real-time tracking significantly increases satisfaction.",
      "Filter options are critical for quick decision-making.",
      "Clear pricing without hidden fees builds trust.",
    ],
    informationArchitecture: {
      userApp: [
        "Home / Restaurant Discovery",
        "Restaurant Menu",
        "Cart",
        "Checkout",
        "Order Tracking",
        "Order History",
        "Profile & Preferences",
      ],
      adminDashboard: [
        "Restaurant Management",
        "Order Queue",
        "Delivery Coordination",
        "Analytics",
      ],
    },
    wireframes: [
      "Card-based restaurant listings with filters",
      "Visual menu with large food images",
      "Simple cart with modification options",
      "Map-based delivery tracking",
    ],
    visualDesign: [
      "Warm, appetizing color palette",
      "High-quality food photography",
      "Clear category badges and icons",
      "Progress indicators for order status",
      "Prominent CTA buttons for quick actions",
    ],
    challenges: [
      {
        challenge: "Users got lost in too many restaurant options.",
        solution: "Added smart filters (cuisine, rating, delivery time, diet) and personalized recommendations.",
      },
      {
        challenge: "Checkout process was too long.",
        solution: "Reduced from 5 steps to 2 with saved addresses and payment methods.",
      },
      {
        challenge: "Users anxious about delivery status.",
        solution: "Implemented live map tracking with driver location and ETA updates.",
      },
    ],
    finalOutcome: "A streamlined food delivery experience that reduces friction at every step, from discovery to doorstep, while maintaining transparency and user control.",
    impact: [
      "Checkout completion rate increased by 65%",
      "Average order time reduced by 45 seconds",
      "Customer satisfaction scores improved significantly",
      "Repeat order rate increased due to saved preferences",
    ],
    learnings: "This project taught me the importance of speed and simplicity in transactional experiences. Every extra step costs conversions, and real-time feedback is crucial for user confidence.",
    image: recipeImage,
    tags: ["Food", "Mobile App", "Delivery", "E-commerce", "UI/UX Design"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "it-solutions",
    title: "IT Solutions Company Website",
    client: "TechCore Solutions",
    subtitle: "A modern service-focused website showcasing IT solutions with clarity and structure.",
    description: "This project involved designing a professional, trust-focused website for an IT services company offering software development, cloud services, cybersecurity, and technical consulting. My role included UX strategy, site architecture, UI design, branding alignment, and creating a clean, modern layout tailored toward business clients.",
    problem: "IT service companies often face overcrowded pages, technical jargon that confuses clients, lack of clear differentiation between services, outdated visual identity, and no strong call-to-action to drive leads. The company needed a modern and trustworthy website that converts visitors into clients.",
    goals: [
      "Build a clean, credible brand presence",
      "Clearly communicate the services offered",
      "Increase business leads via strong CTAs",
      "Highlight case studies and past work",
      "Make content easy to navigate for non-technical users",
    ],
    targetUsers: [
      "Small–medium business owners",
      "Enterprise clients",
      "CTOs, IT managers",
      "Startups seeking development partnerships",
    ],
    researchInsights: [
      "Clients want proof of expertise (case studies, certificates, partners).",
      "Simpler language creates more trust.",
      "Strong CTAs dramatically increase conversions.",
      "Companies need a very clear 'Why Us?' section to stand out.",
    ],
    informationArchitecture: {
      userApp: [
        "Home",
        "About Us",
        "Services",
        "Solutions",
        "Case Studies / Portfolio",
        "Blog / Insights",
        "Contact",
      ],
      adminDashboard: [
        "Hero Section",
        "Services Overview",
        "Industries Served",
        "Success Stories",
        "Client Testimonials",
        "Contact CTA",
      ],
    },
    wireframes: [
      "A strong hero with a clean tech aesthetic",
      "Large, readable service cards",
      "A modular layout that can scale",
      "A grid-based section for case studies",
      "Sticky header for improved navigation",
    ],
    visualDesign: [
      "Professional blue/white/neutral color palette",
      "Clean tech-inspired typography",
      "Simple iconography for service categories",
      "Consistent spacing and grid system",
      "High-contrast CTAs ('Get a Quote', 'Request Demo')",
    ],
    challenges: [
      {
        challenge: "Too many services overwhelmed visitors.",
        solution: "Grouped offerings into 4 main service categories with sub-pages.",
      },
      {
        challenge: "Complex technical explanations.",
        solution: "Rewrote content into plain language with visual diagrams.",
      },
      {
        challenge: "Lack of trust indicators.",
        solution: "Added testimonials, partner logos, certifications, and case studies.",
      },
    ],
    finalOutcome: "A polished, corporate website that communicates the company's expertise while providing an intuitive, conversion-focused user experience.",
    impact: [
      "Increased client inquiries by 55%",
      "Higher engagement with services pages",
      "More trust due to visible case studies",
      "Clear differentiation from competitors",
    ],
    learnings: "This project strengthened my ability to communicate technical services in a simple, business-friendly way. I also deepened my practice in structured corporate UX and conversion-optimized layouts.",
    image: portfolioImage,
    tags: ["Corporate", "Web Design", "B2B", "Responsive Design", "UI/UX"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "multimedia-company",
    title: "Multimedia Company Website",
    client: "Creative Vision Studios",
    subtitle: "A visually engaging website that highlights creative services and portfolio work.",
    description: "This project involved creating a visually engaging website for a multimedia agency specializing in video production, animation, photography, and branding services. The design needed to highlight portfolios, introduce services, and give potential clients an immersive first impression. My role included brand research, UX flow creation, layout design, visual direction, and developing a portfolio-focused interface.",
    problem: "Creative agencies often struggle with unorganized portfolios, weak first impressions, overloaded animations that slow websites down, confusing navigation, and inconsistent visual style. The goal was to create a website that is high-impact visually, but still clean, professional, and easy to navigate.",
    goals: [
      "Showcase creative work with strong visuals",
      "Improve client trust through clear storytelling",
      "Provide a smooth browsing experience with animations",
      "Highlight the company's core services",
      "Make the portfolio the hero of the website",
    ],
    targetUsers: [
      "Corporate clients",
      "Marketing teams",
      "Brands seeking promotional content",
      "Event organizers",
      "Agencies looking for production partners",
    ],
    researchInsights: [
      "Clients judge quality within 5 seconds.",
      "Visual work must be shown before text.",
      "A scrolling narrative increases engagement.",
      "Video + photography thumbnails boost interaction.",
    ],
    informationArchitecture: {
      userApp: [
        "Home",
        "About",
        "Services",
        "Portfolio (Video, Photo, Animation)",
        "Our Process",
        "Testimonials",
        "Contact",
      ],
      adminDashboard: [
        "Hero Video/Slider",
        "Featured Work",
        "Production Services",
        "Client Brands",
        "Team Introduction",
        "Contact CTA",
      ],
    },
    wireframes: [
      "A cinematic hero section",
      "A scroll-triggered storytelling flow",
      "Grid-style portfolio layout with filters",
      "Minimal, centered navigation",
      "Project detail pages with large visuals",
    ],
    visualDesign: [
      "Dark, cinematic color palette",
      "Modern typography with strong contrast",
      "Smooth transitions between sections",
      "Large thumbnail previews",
      "Hover effects to show project details",
    ],
    challenges: [
      {
        challenge: "Clients wanted high-impact visuals without performance issues.",
        solution: "Optimized videos + lazy loading + lightweight animations.",
      },
      {
        challenge: "Too many project categories.",
        solution: "Added filters and consolidated into 3 categories.",
      },
      {
        challenge: "Portfolios looked inconsistent.",
        solution: "Standardized project card layout and detail pages.",
      },
    ],
    finalOutcome: "The final website delivers a cinematic browsing experience, emphasizing creativity and professionalism while maintaining performance and usability.",
    impact: [
      "Stronger brand perception",
      "Higher portfolio engagement by 80%",
      "Improved conversion rate for inquiries",
      "Organized and flexible portfolio management",
    ],
    learnings: "I learned how to balance creativity with usability, especially for visual-heavy websites. It reinforced the power of clean storytelling and consistency in multimedia presentations.",
    image: socialImage,
    tags: ["Creative", "Web Design", "Portfolio", "Visual Design", "UI/UX"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "live-streaming",
    title: "Live Streaming Application",
    client: "StreamConnect",
    subtitle: "A smooth, intuitive interface for discovering, watching, and interacting with live streams.",
    description: "This project focused on building a creator-first live streaming platform that supports real-time video, live chat, gifting, user profiles, and analytics. My responsibilities included UX research, flow design, UI layout, and designing interactive features that enhance engagement.",
    problem: "Common issues in live-streaming apps include overloaded interfaces during live streams, low engagement due to unclear interaction options, complicated streamer dashboards, poor monetization visibility, and difficult content discovery. The goal was to create a balanced, clean, creator-driven interface.",
    goals: [
      "Simplify the live streaming interface",
      "Increase viewer engagement",
      "Provide creators with clear insights & monetization tools",
      "Improve discovery of streams and creators",
      "Build a seamless, immersive mobile experience",
    ],
    targetUsers: [
      "Content creators (professionals & casual)",
      "Gamers",
      "Entertainment streamers",
      "Viewers who enjoy interactive content",
    ],
    researchInsights: [
      "Viewers engage more when actions (like, gift, follow) are visible but not blocking.",
      "Creators need simple controls during streaming.",
      "Gamification increases session time.",
      "Personalization boosts discovery.",
    ],
    informationArchitecture: {
      userApp: [
        "Home Feed",
        "Categories",
        "Live Stream Room",
        "Creator Dashboard",
        "Wallet / Earnings",
        "Profile",
      ],
      adminDashboard: [
        "Stream Analytics",
        "Content Moderation",
        "Revenue Reports",
        "User Management",
      ],
    },
    wireframes: [
      "Edge-to-edge full-screen video",
      "Layered chat + engagement system",
      "Gamified gifting animations (non-intrusive)",
      "Creator control panel (mute, camera, end, insights)",
      "Scrollable creator discovery feed",
    ],
    visualDesign: [
      "Dark mode for video focus",
      "Transparent overlays for chat and actions",
      "Animated gift effects",
      "Color-coded user badges",
      "Minimal controls that auto-hide",
    ],
    challenges: [
      {
        challenge: "Chat was distracting during streams.",
        solution: "Made chat translucent and collapsible with smooth animations.",
      },
      {
        challenge: "Creators struggled with controls while streaming.",
        solution: "Created a simplified floating control panel with essential actions only.",
      },
      {
        challenge: "Discovery was poor for new creators.",
        solution: "Built a personalized algorithm + 'New Streamers' section.",
      },
    ],
    finalOutcome: "A clean, immersive streaming platform that balances viewer engagement with creator control, designed for mobile-first experiences.",
    impact: [
      "Viewer engagement time increased by 40%",
      "Creator satisfaction improved significantly",
      "Gifting revenue increased by 60%",
      "Better content discovery for emerging streamers",
    ],
    learnings: "This project taught me how to design for real-time interactions without cluttering the interface. Balancing creator needs with viewer experience is critical in live platforms.",
    image: musicImage,
    tags: ["Entertainment", "Streaming", "Mobile", "Social", "UI/UX Design"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "air-conditioning",
    title: "Commercial Air Conditioning Website",
    client: "CoolTech HVAC",
    subtitle: "A professional website presenting products and services with a clean corporate layout.",
    description: "This project involved designing a professional B2B website for a commercial air conditioning company. The website needed to showcase HVAC products, services, installation projects, and build credibility with corporate clients. My role included UX research, information architecture, visual design, and creating a conversion-focused layout for business inquiries.",
    problem: "Industrial and commercial service websites often suffer from outdated designs, poor product presentation, lack of clear service differentiation, difficult navigation for technical specifications, and weak lead generation systems. The company needed a modern, trustworthy presence.",
    goals: [
      "Present products and services clearly",
      "Build trust with corporate clients",
      "Showcase past installation projects",
      "Make technical specifications easy to find",
      "Generate qualified business leads",
    ],
    targetUsers: [
      "Building managers",
      "Construction companies",
      "Commercial property owners",
      "Facility management teams",
      "HVAC contractors",
    ],
    researchInsights: [
      "B2B clients need detailed product specifications upfront.",
      "Case studies and certifications build credibility.",
      "Users want easy ways to request quotes.",
      "Service area clarity is critical for conversions.",
    ],
    informationArchitecture: {
      userApp: [
        "Home",
        "Products",
        "Services",
        "Projects / Case Studies",
        "About Us",
        "Certifications",
        "Contact / Quote Request",
      ],
      adminDashboard: [
        "Hero Section",
        "Product Categories",
        "Service Areas",
        "Featured Projects",
        "Client Testimonials",
        "Quote CTA",
      ],
    },
    wireframes: [
      "Clean hero with service overview",
      "Product grid with filter options",
      "Project showcase gallery",
      "Specification tables",
      "Multi-step quote request form",
    ],
    visualDesign: [
      "Professional blue/grey corporate palette",
      "Clean typography for readability",
      "Technical diagrams and product images",
      "Trust badges and certifications",
      "Clear CTAs for quote requests",
    ],
    challenges: [
      {
        challenge: "Too much technical information overwhelmed visitors.",
        solution: "Created expandable specification sections with visual hierarchy.",
      },
      {
        challenge: "Quote requests were abandoned.",
        solution: "Simplified form to essential fields with progress indicators.",
      },
      {
        challenge: "Lack of credibility indicators.",
        solution: "Added certifications, industry partnerships, and project photos.",
      },
    ],
    finalOutcome: "A professional, conversion-focused website that effectively presents complex HVAC solutions while building trust with corporate clients.",
    impact: [
      "Quote request submissions increased by 70%",
      "Lower bounce rate on product pages",
      "Improved brand perception",
      "Better qualified leads for sales team",
    ],
    learnings: "This project reinforced the importance of balancing technical detail with visual clarity in B2B contexts. Trust indicators are crucial for converting corporate clients.",
    image: weatherImage,
    tags: ["Corporate", "Web Design", "B2B", "Industrial", "UI/UX"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Application",
    client: "HealthHub",
    subtitle: "A user-friendly health management experience with accessible navigation and key features.",
    description: "This healthcare application was designed to help users manage their health data, book appointments, access medical records, consult with doctors, and track wellness metrics. My role included user research, flow design, accessibility considerations, UI design, and ensuring HIPAA-compliant user experiences.",
    problem: "Healthcare apps often suffer from complex navigation, poor accessibility for diverse users, confusing appointment booking flows, scattered health information, lack of clear communication with providers, and privacy concerns. Users needed a centralized, trustworthy health management solution.",
    goals: [
      "Create an accessible interface for all age groups",
      "Simplify appointment booking and management",
      "Provide secure access to medical records",
      "Enable easy communication with healthcare providers",
      "Support health tracking and wellness goals",
    ],
    targetUsers: [
      "Patients managing chronic conditions",
      "Elderly users needing accessible design",
      "Parents managing family health",
      "Health-conscious individuals",
      "Healthcare providers",
    ],
    researchInsights: [
      "Elderly users need larger text and simpler navigation.",
      "Users want all health data in one place.",
      "Appointment reminders significantly reduce no-shows.",
      "Privacy and security messaging builds trust.",
    ],
    informationArchitecture: {
      userApp: [
        "Home Dashboard",
        "Appointments",
        "Medical Records",
        "Prescriptions",
        "Health Tracking",
        "Telemedicine",
        "Profile & Settings",
      ],
      adminDashboard: [
        "Patient Management",
        "Appointment Scheduling",
        "Medical Records Access",
        "Communication Hub",
      ],
    },
    wireframes: [
      "Dashboard with health overview",
      "Calendar-based appointment booking",
      "Secure document viewer for records",
      "Simple health metric input forms",
      "Video consultation interface",
    ],
    visualDesign: [
      "Calming blue/green healthcare palette",
      "Large, readable typography",
      "Clear iconography for health categories",
      "Accessible color contrast ratios",
      "Trust indicators for security",
    ],
    challenges: [
      {
        challenge: "Complex navigation confused users.",
        solution: "Created a card-based dashboard with clear categorization.",
      },
      {
        challenge: "Appointment booking had too many steps.",
        solution: "Reduced to 3 steps: select doctor, choose time, confirm.",
      },
      {
        challenge: "Users worried about data security.",
        solution: "Added clear privacy messaging and security indicators throughout.",
      },
    ],
    finalOutcome: "A comprehensive, accessible healthcare app that puts users in control of their health management while maintaining security and ease of use.",
    impact: [
      "Appointment booking completion rate increased by 75%",
      "User satisfaction scores improved significantly",
      "Reduced support calls due to clearer navigation",
      "Higher engagement with health tracking features",
    ],
    learnings: "This project emphasized the critical importance of accessibility and clarity in healthcare design. Building trust through transparent security practices is essential.",
    image: fitnessImage,
    tags: ["Healthcare", "Mobile App", "Wellness", "Accessibility", "UI/UX Design"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "massage-service",
    title: "Massage Service Website",
    client: "Serenity Spa & Wellness",
    subtitle: "A minimal, calming booking experience for exploring services and scheduling appointments.",
    description: "This project focused on creating a calming, minimal website for a massage and wellness service. The design needed to reflect the peaceful nature of the business while making it easy for clients to explore services, view therapist profiles, and book appointments. My role included UX design, visual branding, booking flow optimization, and creating a serene digital experience.",
    problem: "Wellness websites often lack the calming aesthetic they promote, have complicated booking systems, poor service presentation, difficulty in choosing therapists, and unclear pricing. Clients needed a stress-free way to discover and book wellness services.",
    goals: [
      "Create a calming, minimal visual experience",
      "Simplify service discovery and selection",
      "Make appointment booking effortless",
      "Showcase therapist expertise and specialties",
      "Communicate pricing clearly and transparently",
    ],
    targetUsers: [
      "Individuals seeking relaxation and stress relief",
      "People with chronic pain",
      "Corporate clients for group bookings",
      "First-time massage clients",
      "Regular wellness customers",
    ],
    researchInsights: [
      "Users want to see service descriptions and benefits clearly.",
      "Therapist credentials and specialties influence booking decisions.",
      "Simple, fast booking reduces abandonment.",
      "Calming visuals increase trust and brand alignment.",
    ],
    informationArchitecture: {
      userApp: [
        "Home",
        "Services",
        "Therapists",
        "Booking",
        "About",
        "Wellness Blog",
        "Contact",
      ],
      adminDashboard: [
        "Hero Section",
        "Service Menu",
        "Meet Our Team",
        "Booking CTA",
        "Testimonials",
        "Location & Hours",
      ],
    },
    wireframes: [
      "Minimal hero with serene imagery",
      "Service cards with clear descriptions",
      "Therapist profiles with photos and bios",
      "Calendar-based booking interface",
      "Confirmation page with appointment details",
    ],
    visualDesign: [
      "Soft neutral color palette (beige, cream, sage)",
      "Serene photography and natural imagery",
      "Elegant, readable typography",
      "Generous white space for calm feeling",
      "Subtle animations for smooth interactions",
    ],
    challenges: [
      {
        challenge: "Users felt overwhelmed by too many service options.",
        solution: "Categorized services into massage types, wellness treatments, and packages.",
      },
      {
        challenge: "Booking process was too complex.",
        solution: "Created a 3-step flow: choose service, select therapist/time, confirm.",
      },
      {
        challenge: "First-time clients needed guidance.",
        solution: "Added service descriptions with benefits and 'Good For' recommendations.",
      },
    ],
    finalOutcome: "A serene, minimal website that perfectly reflects the calm experience clients can expect, while making booking simple and stress-free.",
    impact: [
      "Online bookings increased by 85%",
      "Reduced phone inquiries about services",
      "Higher conversion from visitors to bookings",
      "Strong brand alignment with wellness values",
    ],
    learnings: "This project taught me how visual design directly impacts user perception and trust. In wellness contexts, the design must embody the experience being offered.",
    image: travelImage,
    tags: ["Wellness", "Booking", "Web Design", "Minimal Design", "UI/UX"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "clothing-ecommerce",
    title: "Clothing E-commerce Website",
    client: "StyleHub Fashion",
    subtitle: "A modern shopping interface with clear product presentation and a simple checkout flow.",
    description: "This e-commerce website was designed for a fashion retail brand selling clothing and accessories online. The project focused on creating an engaging shopping experience with excellent product presentation, easy filtering, streamlined checkout, and mobile optimization. My role included UX research, visual design, checkout optimization, and responsive design implementation.",
    problem: "Fashion e-commerce sites often struggle with poor product imagery, confusing size guides, complicated filtering systems, lengthy checkout processes, and high cart abandonment rates. The brand needed a modern, conversion-focused shopping experience.",
    goals: [
      "Showcase products with high-quality visuals",
      "Make product discovery and filtering intuitive",
      "Reduce checkout friction",
      "Provide clear size and fit information",
      "Create a mobile-first shopping experience",
    ],
    targetUsers: [
      "Fashion-conscious shoppers aged 18-35",
      "Mobile-first shoppers",
      "Budget-conscious students",
      "Professional shoppers seeking quality basics",
      "Gift shoppers",
    ],
    researchInsights: [
      "Users abandon sites with poor product photos.",
      "Size uncertainty is the #1 reason for returns.",
      "Mobile users prefer thumb-friendly navigation.",
      "Guest checkout significantly increases conversions.",
    ],
    informationArchitecture: {
      userApp: [
        "Home",
        "Shop (Men, Women, Accessories)",
        "Product Page",
        "Cart",
        "Checkout",
        "Account",
        "Order Tracking",
      ],
      adminDashboard: [
        "Product Management",
        "Order Processing",
        "Inventory Tracking",
        "Customer Analytics",
      ],
    },
    wireframes: [
      "Visual grid for product browsing",
      "Filter sidebar with categories, size, price",
      "Product page with multiple images and zoom",
      "Sticky add-to-cart button",
      "One-page checkout design",
    ],
    visualDesign: [
      "Clean, modern aesthetic",
      "High-quality product photography",
      "Fashion-forward typography",
      "Minimal color palette to highlight products",
      "Clear size charts and fit guides",
    ],
    challenges: [
      {
        challenge: "High cart abandonment rate.",
        solution: "Implemented guest checkout and reduced checkout to 2 steps.",
      },
      {
        challenge: "Size-related returns were high.",
        solution: "Added detailed size guides, fit recommendations, and customer reviews with sizing feedback.",
      },
      {
        challenge: "Mobile browsing felt cluttered.",
        solution: "Redesigned with thumb-zone navigation and larger touch targets.",
      },
    ],
    finalOutcome: "A sleek, conversion-optimized e-commerce experience that makes shopping enjoyable while reducing friction at every step.",
    impact: [
      "Cart abandonment reduced by 45%",
      "Mobile conversion rate increased by 60%",
      "Size-related returns decreased by 30%",
      "Average session time increased significantly",
    ],
    learnings: "This project reinforced the importance of product presentation and trust indicators in e-commerce. Small UX improvements in checkout can dramatically impact conversion rates.",
    image: ecommerceImage,
    tags: ["E-commerce", "Fashion", "Web App", "Mobile-First", "UI/UX Design"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
  {
    id: "real-estate",
    title: "Real Estate Application",
    client: "HomeQuest Realty",
    subtitle: "A clean property search experience with easy filters and intuitive browsing.",
    description: "This real estate application was designed to help users search, filter, and discover properties for rent or purchase. The platform needed to handle complex search criteria while maintaining simplicity and visual appeal. My role included UX research, search/filter design, map integration, property listing optimization, and mobile design.",
    problem: "Real estate platforms often overwhelm users with too many options, have confusing filter systems, poor property presentation, difficult map navigation, and lack of saved search functionality. Users needed a clean, efficient way to find their ideal property.",
    goals: [
      "Simplify property search and filtering",
      "Provide clear, comprehensive property information",
      "Integrate map-based browsing seamlessly",
      "Enable easy comparison between properties",
      "Support saved searches and favorites",
    ],
    targetUsers: [
      "First-time homebuyers",
      "Renters searching for apartments",
      "Real estate investors",
      "Families relocating",
      "Real estate agents",
    ],
    researchInsights: [
      "Users want both list and map views.",
      "Price, location, and size are top priority filters.",
      "High-quality photos are critical for engagement.",
      "Virtual tours significantly increase interest.",
    ],
    informationArchitecture: {
      userApp: [
        "Home / Search",
        "Property Listings",
        "Property Details",
        "Map View",
        "Saved Properties",
        "Mortgage Calculator",
        "Profile",
      ],
      adminDashboard: [
        "Property Management",
        "Lead Tracking",
        "Analytics",
        "Agent Management",
      ],
    },
    wireframes: [
      "Dual view (list/map) toggle",
      "Advanced filter sidebar",
      "Property cards with key details",
      "Image gallery with virtual tour option",
      "Agent contact form",
    ],
    visualDesign: [
      "Professional, trustworthy color palette",
      "Large property images",
      "Clear typography for specs",
      "Interactive map interface",
      "Prominent CTA buttons for contact",
    ],
    challenges: [
      {
        challenge: "Too many filter options confused users.",
        solution: "Organized filters into primary (price, beds, location) and advanced categories.",
      },
      {
        challenge: "Users struggled switching between map and list.",
        solution: "Created a synchronized dual-pane view with smooth transitions.",
      },
      {
        challenge: "Property comparison was difficult.",
        solution: "Added a comparison tool with side-by-side property details.",
      },
    ],
    finalOutcome: "A clean, efficient real estate platform that makes property search intuitive while providing all the information users need to make decisions.",
    impact: [
      "User engagement time increased by 50%",
      "Lead generation increased by 65%",
      "Users saved more properties for consideration",
      "Lower bounce rate on search results",
    ],
    learnings: "This project taught me how to manage complex filtering systems while maintaining simplicity. Visual hierarchy and clear information architecture are crucial in data-heavy applications.",
    image: bankingImage,
    tags: ["Real Estate", "Mobile App", "Search", "Maps", "UI/UX Design"],
    duration: "Design phase",
    role: "UI/UX Designer",
  },
];

export function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-foreground-secondary mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-foreground-secondary mb-6">
            {caseStudy.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-border">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-auto"
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            {caseStudy.description}
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            {caseStudy.problem}
          </p>
        </section>

        {/* Goals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Goals</h2>
          <ul className="space-y-3">
            {caseStudy.goals.map((goal, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-foreground-secondary"
              >
                <span className="text-accent-primary mt-1">✓</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Target Users */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Target Users</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.targetUsers.map((user, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-accent/30 border border-border"
              >
                <p className="text-foreground">{user}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Insights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Research Insights</h2>
          <div className="space-y-3">
            {caseStudy.researchInsights.map((insight, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-accent/20 border border-border"
              >
                <p className="text-foreground-secondary">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Information Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Information Architecture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-accent/20 border border-border">
              <h3 className="font-bold mb-4">
                {caseStudy.informationArchitecture.userApp ? "User App" : "Main Structure"}
              </h3>
              <ul className="space-y-2">
                {caseStudy.informationArchitecture.userApp.map((item, index) => (
                  <li key={index} className="text-foreground-secondary">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-accent/20 border border-border">
              <h3 className="font-bold mb-4">
                {caseStudy.informationArchitecture.adminDashboard ? "Admin Dashboard" : "Secondary Structure"}
              </h3>
              <ul className="space-y-2">
                {caseStudy.informationArchitecture.adminDashboard.map((item, index) => (
                  <li key={index} className="text-foreground-secondary">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Wireframes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Wireframes & Layout</h2>
          <div className="space-y-3">
            {caseStudy.wireframes.map((wireframe, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-accent/20 border border-border"
              >
                <p className="text-foreground-secondary">{wireframe}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Design */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Visual Design</h2>
          <div className="space-y-3">
            {caseStudy.visualDesign.map((design, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-accent/20 border border-border"
              >
                <p className="text-foreground-secondary">{design}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
          <div className="space-y-6">
            {caseStudy.challenges.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-accent/20 border border-border"
              >
                <h3 className="font-bold mb-2 text-accent-secondary">
                  Challenge:
                </h3>
                <p className="text-foreground-secondary mb-4">
                  {item.challenge}
                </p>
                <h3 className="font-bold mb-2 text-accent-success">
                  Solution:
                </h3>
                <p className="text-foreground-secondary">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Outcome */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Final Outcome</h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            {caseStudy.finalOutcome}
          </p>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Impact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.impact.map((impact, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-border"
              >
                <p className="font-medium text-foreground">{impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
          <div className="p-6 rounded-xl bg-accent/30 border border-border">
            <p className="text-lg text-foreground-secondary leading-relaxed">
              {caseStudy.learnings}
            </p>
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center pt-8">
          <Link to="/">
            <Button size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View More Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}