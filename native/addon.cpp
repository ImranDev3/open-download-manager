#include <napi.h>
#include <string>

// A simple C++ function to test the integration
Napi::String HelloFromCpp(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    return Napi::String::New(env, "Hello from the C++ Native Core! ODM is blazing fast now!");
}

// Initialize the addon and export the function
Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "helloFromCpp"),
                Napi::Function::New(env, HelloFromCpp));
    return exports;
}

NODE_API_MODULE(addon, Init)
