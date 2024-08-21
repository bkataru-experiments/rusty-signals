struct Signal<T> {
    value: T,
    subscribers: Vec<F: Fn()>,
}

/*
impl Signal {
    fn new(value) -> Self {
        Self {
            value,
            subscribers: []
        }
    }
}
*/

fn main() {
    println!("Hello, world!");
}
