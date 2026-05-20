use leptos::*;
use crate::models::types::Project as ProjectType;
use crate::models::constants::GITHUB;
use super::youtube_embed::YouTubeEmbed;
use super::button::Button;
use super::project_image_display::ProjectImageDisplay;

#[component]
pub fn Project(project: ProjectType) -> impl IntoView {
    let title = project.title;
    let description = project.description;
    let repo = project.repo;
    let is_hosted = project.is_hosted;
    let download_or_open = project.download_or_open;
    let images: Vec<&'static str> = project.images.to_vec();
    let github_link = format!("{}{}", GITHUB, repo);

    let youtube_view = project.youtube_id.map(|id| {
        view! {
            <YouTubeEmbed id=id />
        }
    });

    let images_view = if !images.is_empty() {
        Some(view! {
            <ProjectImageDisplay images=images />
        })
    } else {
        None
    };

    let link_view = if is_hosted {
        download_or_open.map(|link| {
            let link_str = link.to_string();
            view! {
                <Button title="Click Here to open" link=link_str />
            }
        })
    } else {
        download_or_open.map(|link| {
            let link_str = link.to_string();
            view! {
                <Button title="Download" link=link_str />
            }
        })
    };

    view! {
        <div class="flex flex-col items-center bg-everforest-bg1 border border-everforest-bg3 rounded-lg shadow-md hover:shadow-xl hover:shadow-everforest-green/10 p-6 space-y-5 w-[350px] md:w-[450px] min-h-full mx-4 mt-8 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-everforest-green/30">
            <h1 class="font-bold text-everforest-fg text-2xl text-center">{title}</h1>
            {youtube_view}
            {images_view}
            <p class="text-center text-everforest-grey2 text-sm leading-relaxed">{description}</p>
            <div class="flex flex-row justify-items-center space-x-2 sm:space-x-3">
                {link_view}
                <Button title="Check out the code" link=github_link />
            </div>
        </div>
    }
}
