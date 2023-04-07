#include <cstdlib>
#include <iostream>

extern "C" {
  void sayHello(void* str) {
    char* used_name = reinterpret_cast<char*>(str);
    std::cout << "Hello " << used_name << std::endl;
  }
}