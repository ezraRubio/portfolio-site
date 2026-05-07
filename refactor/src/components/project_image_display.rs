use leptos::*;

#[component]
pub fn ProjectImageDisplay(images: Vec<&'static str>) -> impl IntoView {
    view! {
        <div class="flex flex-row">
            {images.iter().map(|image| {
                let img = *image;
                view! {
                    <img
                        src=img
                        alt="project image"
                        height="250"
                        width="150"
                    />
                }
            }).collect::<Vec<_>>()}
        </div>
    }
}
