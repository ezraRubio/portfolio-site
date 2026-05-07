use leptos::*;
use crate::components::project::Project;
use crate::models::constants::PROJECTS;

#[component]
pub fn Projects() -> impl IntoView {
    view! {
        <div class="flex flex-row justify-center flex-wrap my-14">
            {PROJECTS.iter().map(|project| {
                let p = project.clone();
                view! {
                    <Project project=p />
                }
            }).collect::<Vec<_>>()}
        </div>
    }
}
