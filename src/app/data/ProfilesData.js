import uiBg from "../../../public/assets/image 162.png"
import figmaIcon from "../../../public/assets/Figma.png";
import adobeIlustrator from "../../../public/assets/Adobe Illustrator.png";
import adobeXd from "../../../public/assets/Adobe XD.png";
import adobePhotoshop from "../../../public/assets/Adobe Photoshop.png";
import reactImg from "../../../public/assets/reactwithbg-removebg-preview.png";
import nextImg from "../../../public/assets/nextjs.1024x617.png";
import reduxImg from "../../../public/assets/redux-removebg-preview.png";
import css3 from "../../../public/assets/CSS3.png";
import nodejsImg from "../../../public/assets/nodejs-removebg-preview.png";
import expressImg from "../../../public/assets/express-removebg-preview.png";
import mongodbImg from "../../../public/assets/mongodb-removebg-preview.png";
import aws from "../../../public/assets/aws-removebg-preview.png";
import dockerImg from "../../../public/assets/docker-removebg-preview.png";
import kubernativeImg from "../../../public/assets/kubernatives-removebg-preview.png";
import cicdImg from "../../../public/assets/cicd-removebg-preview.png";
import wordImg from "../../../public/assets/word-removebg-preview.png";
import excelImg from "../../../public/assets/excel-removebg-preview.png";
import powerpointImg from "../../../public/assets/powerpoint-removebg-preview.png";
import hrImg from "../../../public/assets/hr-removebg-preview.png";
import videoMarketingImg from "../../../public/assets/video_marketing-removebg-preview.png";
import emailMarketingImg from "../../../public/assets/email_marketing-removebg-preview.png";
import seoImg from "../../../public/assets/seo-removebg-preview.png";
import search_engineImg from "../../../public/assets/serch_engine-removebg-preview.png";
import content_marketingImg from "../../../public/assets/content_marketing-removebg-preview.png";
import salesImg from "../../../public/assets/sales-removebg-preview.png";
import roiImg from "../../../public/assets/roi-removebg-preview.png";
import semImg from "../../../public/assets/sem-removebg-preview.png";
import communicationImg from "../../../public/assets/communication-removebg-preview.png";
import negotiationImg from "../../../public/assets/negotiations-removebg-preview.png";


export const ITProfileData = 
[
    "UI/UX Designer Intern",
    "Frontend Developer Intern",
    "DevOps Intern",
    "Backend Developer Intern"
]

export const NonITProfileData = 
[
    "Human Resource Management Intern",
    "Social Media Marketing Intern",
    "Digital Marketing and Branding Intern",
    "Business Development Intern"
]
 export const proficiencyContent ={
    "IT":{
        "Frontend Developer Intern":"Rate your proficiency in React and Next on a scale of 1 to 10.",
        "UI/UX Designer Intern":"Rate your proficiency in Figma on a scale of 1 to 10.",
        "DevOps Intern":"Rate your proficiency in Docker and CI/CD on a scale of 1 to 10.",
        "Backend Developer Intern":"Rate your proficiency in Node.js and MongoDB on a scale of 1 to 10."
    },
    "Non-IT":{
        "Human Resource Management Intern":"Rate your proficiency in HR Management on a scale of 1 to 10.",
        "Social Media Marketing Intern":"Rate your proficiency in Social Campaigns on a scale of 1 to 10.",
        "Digital Marketing and Branding Intern":"Rate your proficiency in Generating Leads on a scale of 1 to 10.",
        "Business Development Intern":"Rate your proficiency in Bussiness Development on a scale of 1 to 10.",
    }
}

export const ITProfileCard = [
    {
        bgImage:uiBg,
        title:"UI/UX Design Intern",
        tenure:"90 days",
        skillsProficiency:[figmaIcon,adobeIlustrator,adobeXd,adobePhotoshop],
        eligibility:[
            "Portfolio showcasing UI/UX Projects",
            "Strong Foundation in Interaction Design, User Experience and Visual Design",
            "Good Communication Skills and Ability to Work in a Team"
        ]
    },
    {
        bgImage:uiBg,
        title:"Frontend Developer Intern",
        tenure:"90 days",
        skillsProficiency:[reactImg,nextImg,reduxImg,css3],
        eligibility:[
            "Proven Experience in Frontend Development",
            "Proficiency in JavaScript and React",
            "Familiarity with Frontend Frameworks (e.g., Next)"
        ]
    },
    {
        bgImage:uiBg,
        title:"Backend Developer Intern",
        tenure:"90 days",
        skillsProficiency:[nodejsImg,expressImg,mongodbImg,aws],
        eligibility:[
            "Experience in Backend Development Technologies",
            "Proficiency in Server-side Programming Languages (e.g., Node.js)",
            "Database Management Skills. Understanding of RESTful API Development."
        ]
    },
    {
        bgImage:uiBg,
        title:"DevOps Intern",
        tenure:"90 days",
        skillsProficiency:[dockerImg,kubernativeImg,cicdImg,aws],
        eligibility:[
            "Knowledge of DevOps Practices and Methodologies",
            "Experience with Continuous Integration and Deployment (CI/CD)",
            "Familiarity with Containerization (e.g., Docker)"
        ]
    }
]
export const NonITProfileCard = [
    {
        bgImage:uiBg,
        title:"Human Resource Management Intern",
        tenure:"90 days",
        skillsProficiency:[wordImg,excelImg,powerpointImg,hrImg],
        eligibility:[
            "Interest in Human Resource Management",
            "Understanding of HR Practices and Policies",
            "Effective Communication and Interpersonal Skills"
        ]
    },
    {
        bgImage:uiBg,
        title:"Social Media Marketing Intern",
        tenure:"90 days",
        skillsProficiency:[content_marketingImg,emailMarketingImg,seoImg,search_engineImg],
        eligibility:[
            "Knowledge of Social Media Platforms",
            "Creativity in Content Creation and Campaigns",
            "Analytical Skills for Social Media Metrics"
        ]
    },
    {
        bgImage:uiBg,
        title:"Digital Marketing and Branding Intern",
        tenure:"90 days",
        skillsProficiency:[videoMarketingImg,emailMarketingImg,content_marketingImg,semImg],
        eligibility:[
            "Understanding of Digital Marketing Strategies",
            "Experience in Branding and Positioning",
            "Content Creation and Copywriting Skills"
        ]
    },
    {
        bgImage:uiBg,
        title:"Business Development Intern",
        tenure:"90 days",
        skillsProficiency:[salesImg,roiImg,negotiationImg,communicationImg],
        eligibility:[
            "Interest in Business Development and Sales",
            "Strong Communication and Negotiation Skills",
            "Market Research and Analysis Abilities"
        ]
    }
]

