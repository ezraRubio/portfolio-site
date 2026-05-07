mod models;
mod components;
mod app;

use leptos::*;
use leptos_router::*;
use leptos_meta::*;
use components::nav_bar::navigator::Navigator;

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        <Stylesheet id="leptos" href="/pkg/portfolio.css"/>
        <Title text="Ezra Rubio : Developer" />
        <Meta name="description" content="Ezra's portfolio" />
        <Link rel="icon" href="/favicon.ico" />
        <Navigator />
        <Router>
            <Routes>
                <Route path="" view=app::home::Home />
                <Route path="projects" view=app::projects::Projects />
                <Route path="contact" view=app::contact::Contact />
            </Routes>
        </Router>
    }
}

pub fn main() {
    console_log::init_with_level(log::Level::Debug).expect("couldn't initialize logging");

    mount_to_body(|| {
        view! {
            <App />
        }
    });
}
