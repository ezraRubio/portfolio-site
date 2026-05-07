use crate::models::types::Project;

pub const TITLE: &str = "Ezra Rubio : Developer";
pub const HELLO: &str = "Hello there!";
pub const GITHUB: &str = "https://github.com/ezraRubio/";
pub const YOUTUBE: &str = "https://www.youtube.com/embed/";
pub const LINKEDIN: &str = "https://www.linkedin.com/in/ezrarubio/";

pub const PROJECTS: &[Project] = &[
    Project {
        title: "Music Library Extraction",
        repo: "music-library-extractor",
        description: "Native app for MacOS that allows the user to extract the data from their Apple Music library.",
        images: &[],
        download_or_open: None,
        youtube_id: Some("kfiIeqocJTk"),
        is_hosted: false,
    },
    Project {
        title: "Pet Agency Project",
        repo: "pet-agency-BE",
        description: "Web app that simulates a pet adoption agency.",
        images: &["/assets/pet-agency1.png", "/assets/pet-agency2.png"],
        download_or_open: Some("https://pet-agency.vercel.app/"),
        youtube_id: None,
        is_hosted: true,
    },
    Project {
        title: "To-Do List",
        repo: "to-do_ios",
        description: "Native iOS app that has user login and holds a simple to do list",
        images: &[],
        download_or_open: None,
        youtube_id: None,
        is_hosted: false,
    },
];
