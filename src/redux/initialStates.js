import projImage1 from "../assets/showcase/sc-1.webp"
import projImage2 from "../assets/showcase/sc-2.webp"
import projImage3 from "../assets/showcase/sc-3.webp"
import projImage4 from "../assets/showcase/sc-4.webp"
import projImage5 from "../assets/showcase/sc-5.webp"
import projImage6 from "../assets/showcase/sc-6.webp"


export const projectsInitialState = {
    projects: [
        {header: "Girl Bedroom", id: 1, images: [{src: projImage1, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
        {header: "Gaming Bedroom", id: 2, images: [{src: projImage2, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
        {header: "Dining and Handwash Room + Esquisse", id: 3, images: [{src: projImage1, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
        {header: "Bespoke + Furniture", id: 4, images: [{src: projImage3, filename: 1, title: "GAMING BEDROOM"}, {src: projImage2, filename: 1, title: "GAMING BEDROOM"}, {src: projImage6, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
        {header: "Her Master Bedroom", id: 5, images: [{src: projImage4, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
        {header: "Teen Bedroom", id: 6, images: [{src: projImage5, filename: 1, title: "GAMING BEDROOM"}, {src: projImage2, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },
        {header: "Master Toilet + Esquisse", id: 7, images: [{src: projImage6, filename: 1, title: "GAMING BEDROOM"}, {src: projImage5, filename: 1, title: "GAMING BEDROOM"}, {src: projImage1, filename: 1, title: "GAMING BEDROOM"}, {src: projImage2, filename: 1, title: "GAMING BEDROOM"}, {src: projImage3, filename: 1, title: "GAMING BEDROOM"}], softwares: ["3DSMAX", "Adobe Photoshop"], style: "Contemporary" },      
    ],
    isLoading: false,
    error: null,
}

export const aboutInitialState = {
    isLoading: false,
    error: null,
    about: {
        careerObjective: "",
        experience: [],
        information: {},
        professionalSummary: "",
        resume: {},
        softwareSkills: []
    },

    
}

export const configInitialState = {
    isLoading: false,
    error: null,
    emailjs: {}
}

// export const rootInitialState = {

// }