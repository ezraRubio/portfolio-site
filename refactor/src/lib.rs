mod models;
mod components;
mod app;

use leptos::*;
use leptos_router::*;
use leptos_meta::*;
use wasm_bindgen::prelude::wasm_bindgen;
use components::nav_bar::navigator::Navigator;
use components::footer::Footer;

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        <Title text="Ezra Rubio : Developer" />
        <Meta name="description" content="Ezra's portfolio" />
        <Link rel="icon" href="/favicon.ico" />
        <Router>
            <Navigator />
            <Routes>
                <Route path="/" view=app::home::Home />
                <Route path="projects" view=app::projects::Projects />
                <Route path="contact" view=app::contact::Contact />
            </Routes>
            <Footer />
        </Router>
    }
}

#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
    console_log::init_with_level(log::Level::Debug).expect("couldn't initialize logging");

    mount_to_body(|| {
        view! {
            <App />
        }
    });
}
