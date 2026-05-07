use leptos::*;

#[component]
pub fn YouTubeEmbed(id: &'static str) -> impl IntoView {
    let src = format!("https://www.youtube.com/embed/{}", id);

    view! {
        <div class="aspect-w-16 aspect-h-9">
            <iframe
                src=&src
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=true
                title="Embedded youtube"
            ></iframe>
        </div>
    }
}
