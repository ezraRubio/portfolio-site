use crate::models::enums::Routes;

pub fn get_href(route: &str) -> String {
    match route {
        "Projects" => "/projects".to_string(),
        "Contact" => "/contact".to_string(),
        _ => "/".to_string(),
    }
}

pub fn get_text(route: &str) -> &str {
    match route {
        "Projects" => "Projects",
        "Contact" => "Contact",
        _ => "Home",
    }
}

pub fn all_routes() -> Vec<&'static str> {
    vec![
        Routes::Home.as_str(),
        Routes::Projects.as_str(),
        Routes::Contact.as_str(),
    ]
}
