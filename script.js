      const BANK = {
        CC03: [
          {
            chapter: 1,
            question:
              'In Python, code blocks are defined by ___________, since there are no curly braces or "end" keywords.',
            answer: "Indentation",
            options: [
              "Semicolons",
              "Indentation",
              "Curly braces",
              "Line numbers",
            ],
          },
          {
            chapter: 1,
            question:
              "When a line that should be inside a function is written flush against the left margin, Python raises an ___________ and refuses to run the program.",
            answer: "IndentationError",
            options: [
              "NameError",
              "TypeError",
              "IndentationError",
              "ValueError",
            ],
          },
          {
            chapter: 1,
            question:
              "In an if/else statement, the lines within each branch must match ___________ exactly.",
            answer: "each other's indentation depth",
            options: [
              "each other's indentation depth",
              "the same variable names",
              "the same number of characters",
              "the same data type",
            ],
          },
          {
            chapter: 1,
            question:
              "Mixing tab characters and space characters in indentation, even when they look identical on screen, causes a ___________.",
            answer: "TabError",
            options: [
              "SyntaxError",
              "TabError",
              "NameError",
              "IndentationWarning",
            ],
          },
          {
            chapter: 1,
            question:
              "The Python style standard, PEP 8, recommends exactly ___________ spaces per indentation level.",
            answer: "Four",
            options: ["Two", "Four", "Six", "Eight"],
          },
          {
            chapter: 1,
            question:
              "Any line ending in a colon — such as if, else, elif, for, while, def, or class — opens a new ___________ on the lines that follow.",
            answer: "indented block",
            options: ["variable", "indented block", "function call", "comment"],
          },
          {
            chapter: 1,
            question:
              "Python does not require you to declare a variable's type in advance; the type is instead ___________ from the value at the moment of assignment.",
            answer: "inferred",
            options: ["declared", "inferred", "converted", "ignored"],
          },
          {
            chapter: 1,
            question:
              "The built-in function ___________ lets you check a variable's data type directly.",
            answer: "type()",
            options: ["kind()", "typeof()", "type()", "check()"],
          },
          {
            chapter: 1,
            question:
              "Text values in Python are stored using the ___________ data type, always written inside quotation marks.",
            answer: "str",
            options: ["int", "float", "bool", "str"],
          },
          {
            chapter: 1,
            question:
              "A comparison such as distance <= 1 evaluates to a ___________ value, either True or False.",
            answer: "bool",
            options: ["int", "bool", "str", "float"],
          },
          {
            chapter: 1,
            question:
              "When the same variable name can hold different types of data at different points in a program, this is called ___________.",
            answer: "dynamic typing",
            options: [
              "static typing",
              "type casting",
              "dynamic typing",
              "variable locking",
            ],
          },
          {
            chapter: 1,
            question:
              "The built-in function input() always returns a value of type ___________, no matter what the user types.",
            answer: "str",
            options: ["int", "float", "str", "bool"],
          },
          {
            chapter: 1,
            question:
              "Attempting arithmetic like distance - 1 on a value still in string form raises a ___________.",
            answer: "TypeError",
            options: [
              "NameError",
              "TypeError",
              "IndentationError",
              "SyntaxError",
            ],
          },
          {
            chapter: 1,
            question:
              "Wrapping input() in ___________ converts the returned string into a number that can include decimals.",
            answer: "float()",
            options: ["str()", "bool()", "float()", "type()"],
          },
          {
            chapter: 1,
            question:
              "___________ is the appropriate conversion function when a value must always be a whole number, such as a passenger count.",
            answer: "int()",
            options: ["int()", "float()", "str()", "bool()"],
          },
          {
            chapter: 1,
            question:
              'An ___________, written as f"...", inserts a variable\'s value directly into text and can format it, such as to two decimal places.',
            answer: "f-string",
            options: ["escape string", "f-string", "raw string", "byte string"],
          },
          {
            chapter: 1,
            question:
              "A function definition missing its closing colon produces a ___________.",
            answer: "SyntaxError",
            options: [
              "IndentationError",
              "TypeError",
              "SyntaxError",
              "NameError",
            ],
          },
          {
            chapter: 1,
            question:
              "When Python cannot find a variable with a given name, often due to a typo or using it before assignment, it raises a ___________.",
            answer: "NameError",
            options: [
              "TypeError",
              "NameError",
              "ValueError",
              "IndentationError",
            ],
          },
          {
            chapter: 1,
            question:
              "When reading a traceback, the first thing to check is the ___________, found on the last line, since it names the category of mistake.",
            answer: "error type",
            options: [
              "line number",
              "error type",
              "variable name",
              "file name",
            ],
          },
          {
            chapter: 1,
            question:
              'Adding a string like "15" directly to an integer like 8 raises a TypeError, because Python\'s + operator has no default rule for combining ___________.',
            answer: "text with a number",
            options: [
              "two integers",
              "two strings",
              "text with a number",
              "two booleans",
            ],
          },
          {
            chapter: 2,
            question:
              "1. A while loop keeps repeating for as long as its condition stays _____.",
            answer: "true",
            options: ["true", "false", "zero", "undefined"],
          },
          {
            chapter: 2,
            question:
              "2. range(1, 6) generates the sequence 1, 2, 3, 4, 5, stopping before _____.",
            answer: "6",
            options: ["5", "6", "7", "1"],
          },
          {
            chapter: 2,
            question:
              "3. The keyword _____ lets Python check a new condition only if every condition above it was False.",
            answer: "elif",
            options: ["if", "elif", "else", "while"],
          },
          {
            chapter: 2,
            question:
              "4. Writing range(0, 6) instead of range(1, 6) would start counting from queue position _____.",
            answer: "0",
            options: ["1", "0", "-1", "6"],
          },
          {
            chapter: 2,
            question:
              "5. To count down from 5 to 1, you should write range(5, 0, _____).",
            answer: "-1",
            options: ["-1", "1", "0", "5"],
          },
          {
            chapter: 2,
            question:
              "6. In the barangay tanod analogy, the patrol never ends because nothing forces the checked value to _____.",
            answer: "change",
            options: ["change", "print", "exist", "initialize"],
          },
          {
            chapter: 2,
            question:
              "7. The statement passenger_count = passenger_count + 1 fixes the loop because it moves the condition toward becoming _____.",
            answer: "false",
            options: ["false", "true", "zero", "infinite"],
          },
          {
            chapter: 2,
            question:
              "8. Pressing Ctrl+C in the terminal is the ordinary way to _____ a program stuck in an infinite loop.",
            answer: "interrupt",
            options: ["interrupt", "ignore", "restart", "debug"],
          },
          {
            chapter: 2,
            question:
              "9. A _____ loop is the right tool when you already know exactly how many times to repeat or which items to visit.",
            answer: "for",
            options: ["for", "while", "if", "elif"],
          },
          {
            chapter: 2,
            question:
              '10. In "passenger_count < capacity and next_group < len(arrivals)", Python continues the loop only if _____ sides are true.',
            answer: "both",
            options: ["both", "either", "neither", "one"],
          },
          {
            chapter: 2,
            question:
              "11. In the queue_length practice example, the loop never stops because the _____ branch never updates queue_length.",
            answer: "else",
            options: ["else", "if", "while", "elif"],
          },
          {
            chapter: 2,
            question:
              "12. len(arrivals) returns the number of _____ in the list.",
            answer: "groups",
            options: ["groups", "characters", "passengers", "capacities"],
          },
          {
            chapter: 2,
            question:
              "13. Writing separate if statements instead of an if/elif chain can cause _____ messages to print for a single value.",
            answer: "multiple",
            options: ["multiple", "no", "negative", "random"],
          },
          {
            chapter: 2,
            question:
              "14. A for loop stops automatically once Python _____ through all items in a sequence.",
            answer: "advances",
            options: ["advances", "guesses", "waits", "restarts"],
          },
          {
            chapter: 2,
            question:
              "15. An infinite loop is especially dangerous because it produces _____ error message.",
            answer: "no",
            options: ["no", "an", "multiple", "a syntax"],
          },
          {
            chapter: 2,
            question:
              "16. for minutes_left in range(5): actually starts counting from _____ instead of 5.",
            answer: "0",
            options: ["0", "1", "5", "4"],
          },
          {
            chapter: 2,
            question:
              "17. Before running any while loop, you should find the line that moves the condition toward becoming _____.",
            answer: "false",
            options: ["false", "true", "zero", "infinite"],
          },
          {
            chapter: 2,
            question:
              "18. A tricycle that is never simultaneously overloaded and correctly loaded is an example of _____ categories.",
            answer: "mutually exclusive",
            options: [
              "mutually exclusive",
              "overlapping",
              "unrelated",
              "sequential",
            ],
          },
          {
            chapter: 2,
            question:
              "19. A while loop checks its condition _____ before every single pass through the body.",
            answer: "again",
            options: ["again", "once", "twice", "never"],
          },
          {
            chapter: 2,
            question:
              "20. Loops used later for stacks, queues, and trees must also update their _____ or risk getting stuck the same way.",
            answer: "condition variables",
            options: [
              "condition variables",
              "print statements",
              "comments",
              "filenames",
            ],
          },
          {
            chapter: 3,
            question:
              "1. A function packages a block of code under a name so it can be _______ as many times as needed without duplicating the logic.",
            answer: "reused",
            options: ["deleted", "reused", "imported", "renamed"],
          },
          {
            chapter: 3,
            question:
              "2. The line def calculate_fare(distance): only teaches Python the recipe; the function actually runs only when it is _______.",
            answer: "called",
            options: ["defined", "indented", "called", "compiled"],
          },
          {
            chapter: 3,
            question:
              "3. Each call to a function supplies a different _______ for the same parameter, and each call runs the function body independently.",
            answer: "argument",
            options: ["return value", "argument", "loop", "scope"],
          },
          {
            chapter: 3,
            question:
              "4. Arguments are matched to parameters by _______, meaning the order in which they are listed in the call matters.",
            answer: "position",
            options: ["name", "type", "position", "value"],
          },
          {
            chapter: 3,
            question:
              "5. print() displays something on screen for a human to read, but it does not hand anything back to the code that _______ the function.",
            answer: "called",
            options: ["defined", "called", "imported", "printed"],
          },
          {
            chapter: 3,
            question:
              "6. return sends a value back to wherever the function was called from so that value can be stored, compared, or used in further _______.",
            answer: "calculations",
            options: [
              "loops",
              "calculations",
              "print statements",
              "definitions",
            ],
          },
          {
            chapter: 3,
            question:
              "7. Every function that does not explicitly return something returns _______ automatically.",
            answer: "None",
            options: ["zero", "an error", "None", "the last printed value"],
          },
          {
            chapter: 3,
            question:
              "8. Assigning None to a variable is perfectly legal, so the failure caused by a missing return usually shows up later as a _______ when the value is used in a calculation.",
            answer: "TypeError",
            options: [
              "SyntaxError",
              "IndentationError",
              "TypeError",
              "NameError",
            ],
          },
          {
            chapter: 3,
            question:
              "9. Every variable created inside a function's body, including its parameters, exists only inside that function; this is called _______ scope.",
            answer: "local",
            options: ["global", "local", "shared", "permanent"],
          },
          {
            chapter: 3,
            question:
              "10. When apply_discount(trip_fare) runs, Python passes the value 20.00 into a brand-new local variable named fare, which exists only for the duration of that _______.",
            answer: "function call",
            options: ["program", "function call", "loop", "module"],
          },
          {
            chapter: 3,
            question:
              "11. A variable created outside any function, directly in the main body of a script, lives in _______ scope.",
            answer: "global",
            options: ["local", "private", "global", "temporary"],
          },
          {
            chapter: 3,
            question:
              "12. A function can _______ a variable from the surrounding scope without any special effort, but that does not mean it can change it.",
            answer: "read",
            options: ["read", "delete", "rename", "copy permanently"],
          },
          {
            chapter: 3,
            question:
              "13. The moment a function assigns to a name that matches one of its own parameters, Python treats that name as a fresh _______ variable for the rest of that function.",
            answer: "local",
            options: ["global", "local", "constant", "shared"],
          },
          {
            chapter: 3,
            question:
              "14. Reassigning a parameter inside a function never changes the variable a caller passed in because passing an argument _______ a value into a new, local variable.",
            answer: "copies",
            options: ["links", "copies", "deletes", "renames"],
          },
          {
            chapter: 3,
            question:
              "15. In the corrected version of apply_discount, the calling line must _______ trip_fare itself: trip_fare = apply_discount(trip_fare).",
            answer: "reassign",
            options: ["print", "reassign", "delete", "declare"],
          },
          {
            chapter: 3,
            question:
              "16. Once apply_discount finishes running, its local variable fare does not linger around; Python _______ it entirely along with every other local variable that function created.",
            answer: "discards",
            options: ["saves", "discards", "renames", "exports"],
          },
          {
            chapter: 3,
            question:
              "17. Calling calculate_fare five times in a row, with five separate local scopes, is precisely what makes the function safe to _______ without one call's variables leaking into the next.",
            answer: "reuse",
            options: ["delete", "debug", "reuse", "rename"],
          },
          {
            chapter: 3,
            question:
              "18. The combination of functions and loops lets a program grow from handling one passenger to handling an entire terminal's worth of passengers without growing more _______ in the process.",
            answer: "complicated",
            options: ["efficient", "complicated", "accurate", "modular"],
          },
          {
            chapter: 3,
            question:
              "19. In the loan example, add_processing_fee(principal) fails to update member_loan because the function stacks two mistakes: the scope misunderstanding and the missing _______ statement.",
            answer: "return",
            options: ["print", "loop", "return", "import"],
          },
          {
            chapter: 3,
            question:
              "20. The one check worth running on every function you write is to trace whether it actually returns the value you expect, and whether the calling code actually _______ that returned value.",
            answer: "captures",
            options: ["prints", "captures", "ignores", "deletes"],
          },
          {
            chapter: 4,
            question:
              "(1) A jeepney terminal's daily manifest is naturally represented as a Python ______ because it is an ordered collection that can grow, shrink, and get corrected throughout the day.",
            answer: "list",
            options: ["tuple", "list", "string", "dictionary"],
          },
          {
            chapter: 4,
            question:
              '(2) Writing plate_number[0] = "N" on a string raises a TypeError because strings in Python are ______.',
            answer: "immutable",
            options: ["mutable", "iterable", "immutable", "indexed"],
          },
          {
            chapter: 4,
            question:
              "(3) manifest[0:2] retrieves items starting at index 0 up to, but not including, index 2 — this is called the ______ rule, the same one range() follows.",
            answer: "exclusive-stop",
            options: [
              "exclusive-stop",
              "inclusive-stop",
              "zero-based",
              "reverse-index",
            ],
          },
          {
            chapter: 4,
            question:
              '(4) manifest.append("NCR-3456") adds a new entry to the end of the list ______, meaning it changes the original list without creating a new one.',
            answer: "in place",
            options: [
              "by value",
              "in place",
              "recursively",
              "by reference only",
            ],
          },
          {
            chapter: 4,
            question:
              '(5) manifest.remove("NCR-9012") deletes a specific entry from the list by ______ rather than by its position.',
            answer: "value",
            options: ["index", "value", "slice", "key"],
          },
          {
            chapter: 4,
            question:
              "(6) Writing backup = manifest does not create an independent copy; it creates a second variable name pointing to the ______ list already in memory.",
            answer: "same",
            options: ["same", "duplicated", "sorted", "reversed"],
          },
          {
            chapter: 4,
            question:
              "(7) To create a genuinely independent copy of a list, you must write backup = manifest.copy() or backup = ______.",
            answer: "manifest[:]",
            options: [
              "manifest.append()",
              "manifest[:]",
              "manifest.sort()",
              "manifest.remove()",
            ],
          },
          {
            chapter: 4,
            question:
              "(8) Every string method such as .upper(), .replace(), or concatenation with + builds and returns an entirely new string, leaving the ______ untouched.",
            answer: "original string",
            options: ["variable name", "index", "original string", "list"],
          },
          {
            chapter: 4,
            question:
              '(9) In mask_number(phone), the line phone[i] = "*" fails because phone is a ______ passed into the function.',
            answer: "string",
            options: ["list", "string", "tuple", "dictionary"],
          },
          {
            chapter: 4,
            question:
              "(10) The corrected version of mask_number first converts phone into a mutable structure using digits = ______.",
            answer: "list(phone)",
            options: [
              "phone.split()",
              "list(phone)",
              "phone.copy()",
              "str(phone)",
            ],
          },
          {
            chapter: 4,
            question:
              '(11) After editing each character in the digits list, the function reassembles it into a single string using "".______.',
            answer: "join(digits)",
            options: [
              "append(digits)",
              "join(digits)",
              "replace(digits)",
              "split(digits)",
            ],
          },
          {
            chapter: 4,
            question:
              "(12) The pattern string → list → mutate → string is the standard, idiomatic way Python expects tasks that require ______ editing to be written.",
            answer: "character-by-character",
            options: [
              "whole-string",
              "character-by-character",
              "line-by-line",
              "file-based",
            ],
          },
          {
            chapter: 4,
            question:
              '(13) cleaned = raw_entry.strip().upper().replace(" ", "-") is an example of ______ several string methods together in a single line.',
            answer: "chaining",
            options: ["nesting", "chaining", "looping", "slicing"],
          },
          {
            chapter: 4,
            question:
              '(14) Calling .replace(" ", "-") before .strip() would replace the leading and trailing spaces too, showing that the ______ in which chained methods run can change the final result.',
            answer: "order",
            options: ["order", "number", "naming", "indentation"],
          },
          {
            chapter: 4,
            question:
              '(15) In the cleanup loop, cleaned_manifest.append(cleaned_entry) mutates cleaned_manifest directly, while entry.strip().upper().replace(" ", "-") never touches entry because it builds a brand-new ______ on every call.',
            answer: "string",
            options: ["list", "string", "index", "dictionary"],
          },
          {
            chapter: 4,
            question:
              "(16) .sort() mutates its list in place and returns ______ of its own, so writing manifest = manifest.sort() would quietly set manifest to None.",
            answer: "nothing useful",
            options: ["a new list", "nothing useful", "a copy", "an error"],
          },
          {
            chapter: 4,
            question:
              "(17) .split(sep) is, in a sense, the reverse of ______, since one glues a list of strings into one while the other breaks a string apart into a list.",
            answer: ".join()",
            options: [".strip()", ".replace()", ".join()", ".append()"],
          },
          {
            chapter: 4,
            question:
              "(18) len(x) returns the number of items in a list or the number of ______ in a string.",
            answer: "characters",
            options: ["words", "characters", "lines", "bytes"],
          },
          {
            chapter: 4,
            question:
              "(19) Immutability gives strings a guarantee lists do not have: once created, a string's contents will never change out from under you, which matters especially when a string is used as a ______.",
            answer: "dictionary key",
            options: [
              "loop counter",
              "dictionary key",
              "file path",
              "print statement",
            ],
          },
          {
            chapter: 4,
            question:
              "(20) The overall lesson of the chapter is that knowing which ______ a piece of data belongs to, before trying to change it, is what separates a quick fix from a TypeError.",
            answer: "category (mutable or immutable)",
            options: [
              "variable name",
              "function",
              "category (mutable or immutable)",
              "module",
            ],
          },
          {
            chapter: 5,
            question:
              "1. A ____ is a data structure that reserves a fixed number of contiguous slots, each reachable by a numeric index.",
            answer: "Array",
            options: ["Queue", "Array", "Dictionary", "Set"],
          },
          {
            chapter: 5,
            question:
              "2. Python does not have a separate dedicated array type; its ____ type serves both as a general dynamic collection and, when used deliberately, as a fixed-size array.",
            answer: "List",
            options: ["Tuple", "List", "String", "Set"],
          },
          {
            chapter: 5,
            question:
              '3. The expression ["EMPTY"] * 5 creates a list with ____ entries, each containing the string "EMPTY".',
            answer: "5",
            options: ["4", "5", "6", "10"],
          },
          {
            chapter: 5,
            question:
              "4. For an array of length n, valid indices run from 0 to ____.",
            answer: "n − 1",
            options: ["n", "n + 1", "n − 1", "n / 2"],
          },
          {
            chapter: 5,
            question:
              "5. Running bays[5] on a list with 5 slots raises a(n) ____.",
            answer: "IndexError",
            options: ["TypeError", "ValueError", "IndexError", "KeyError"],
          },
          {
            chapter: 5,
            question:
              "6. len(bays) returns the ____ of items in the list, not the last valid index.",
            answer: "Count",
            options: ["Average", "Count", "Sum", "Type"],
          },
          {
            chapter: 5,
            question:
              "7. The last item of a list can be reached with bays[len(bays) - 1], or more simply with the shortcut bays[____].",
            answer: "−1",
            options: ["0", "−1", "1", "len"],
          },
          {
            chapter: 5,
            question:
              '8. Index 0 means ____ steps away from the first slot, not "no bay" or "the zeroth bay."',
            answer: "Zero",
            options: ["One", "Two", "Zero", "Three"],
          },
          {
            chapter: 5,
            question:
              "9. A five-item array has exactly ____ valid negative indices, from −1 through −5.",
            answer: "5",
            options: ["3", "4", "5", "6"],
          },
          {
            chapter: 5,
            question:
              "10. print(bays[-6]) on a five-item array raises an IndexError because ____.",
            answer:
              "−6 asks for a position one step beyond the array's real range",
            options: [
              "Negative indices are not allowed in Python",
              "−6 asks for a position one step beyond the array's real range",
              "Lists cannot store negative numbers",
              "−6 is not an integer",
            ],
          },
          {
            chapter: 5,
            question:
              "11. The loop range(1, len(bays) + 1) incorrectly matches ____ counting instead of Python's own index range.",
            answer: "Human, one-based",
            options: [
              "Zero-based",
              "Binary",
              "Human, one-based",
              "Hexadecimal",
            ],
          },
          {
            chapter: 5,
            question:
              "12. The safer loop pattern for traversing an array's indices is range(____).",
            answer: "len(bays)",
            options: [
              "len(bays) + 1",
              "1, len(bays)",
              "len(bays)",
              "len(bays) − 2",
            ],
          },
          {
            chapter: 5,
            question:
              '13. To display driver-facing labels like "Bay 1" while still indexing correctly with i, the print statement uses ____ as the label.',
            answer: "i + 1",
            options: ["i", "i + 1", "i − 1", "len(bays)"],
          },
          {
            chapter: 5,
            question:
              "14. The chained comparison 0 <= index < len(bays) checks that an index is ____.",
            answer: "Neither negative nor too large",
            options: [
              "Always negative",
              "Neither negative nor too large",
              "Always equal to len(bays)",
              "A string",
            ],
          },
          {
            chapter: 5,
            question:
              '15. In assign_bay(), calling assign_bay(bays, 5, "NCR-9999") on a 5-slot list triggers the ____ branch, because 5 is not less than len(bays).',
            answer: "else",
            options: ["if", "else", "for", "while"],
          },
          {
            chapter: 5,
            question:
              "16. A queue of customers at a sari-sari store counter is better suited to a freely growing list than a fixed-size array because the number of people ____.",
            answer: "Arrives and leaves unpredictably",
            options: [
              "Is always exactly 5",
              "Arrives and leaves unpredictably",
              "Never changes",
              "Is fixed by the store owner",
            ],
          },
          {
            chapter: 5,
            question:
              "17. Assuming a structure holding n items has a valid index n is called a(n) ____ mistake.",
            answer: "Off-by-one",
            options: ["Syntax", "Off-by-one", "Logic", "Type"],
          },
          {
            chapter: 5,
            question:
              "18. Treating a list as a fixed-size array involves deciding a size upfront, initializing every slot, and not growing it further with ____.",
            answer: ".append()",
            options: [".pop()", ".append()", ".sort()", ".clear()"],
          },
          {
            chapter: 5,
            question:
              "19. Later data structures such as stacks and queues either are built directly on top of an ____ or borrow the same indexing discipline.",
            answer: "Array",
            options: ["Dictionary", "Array", "Tuple", "Set"],
          },
          {
            chapter: 5,
            question:
              "20. Confusing len(bays), a count, with bays[len(bays) - 1], a position, is described as the entire mechanism behind every version of the ____ bug.",
            answer: "Off-by-one",
            options: [
              "Syntax error",
              "Off-by-one",
              "Memory leak",
              "Infinite loop",
            ],
          },
        ],
        WS1: [
          {
            chapter: 1,
            question:
              "1. Every web system, no matter how different it looks, is built from the same basic arrangement: a client that asks for something and a server that answers.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question: "2. The client in a web system is usually a web browser.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question: "3. HTTP stands for HyperText Transfer Protocol.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "4. In the restaurant analogy, the waiter represents the database (MySQL).",
            answer: "False",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "5. In the restaurant analogy, the kitchen represents PHP.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "6. In the restaurant analogy, the pantry and walk-in refrigerator represent MySQL.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "7. In the restaurant analogy, Linux is compared to the building itself — the electrical wiring, plumbing, and structural foundation.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question: "8. LAMP stands for Linux, Apache, MySQL, and PHP.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "9. Apache's main job is to store and organize structured data like student records.",
            answer: "False",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "10. According to the module, Apache is the only web server program available, with no alternatives.",
            answer: "False",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "11. PHP is described as a server-side scripting language, meaning its code runs on the server before a response is sent to the client.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "12. JavaScript, as introduced in the module, is considered part of the back end.",
            answer: "False",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "13. The front end is built primarily with HTML, XHTML, XML, and JavaScript.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "14. When a login fails, the module says the system should tell the user exactly whether the student number or the password was wrong, for clarity.",
            answer: "False",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "15. Separation of concerns means each layer of a system can be maintained, replaced, or upgraded independently of the others.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "16. Linux is open source, meaning its code is publicly available and free to use, modify, and redistribute.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "17. The request-response cycle refers only to the process of logging into Blackboard, not to other web transactions like GCash transfers.",
            answer: "False",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "18. According to the module, a server must always be a distant machine in another city and can never run on your own laptop.",
            answer: "False",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "19. The Progressive PHP-Based Business Web System course project is structured in four phases that roughly correspond to the four LAMP layers.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 1,
            question:
              "20. The module claims that most web security vulnerabilities live precisely at the boundaries between the four LAMP layers.",
            answer: "True",
            options: ["True", "False"],
          },
          {
            chapter: 2,
            question:
              "Q1. A person with ______ access can open and read a file but cannot change or share it.",
            answer: "A. Viewer",
            options: ["A. Viewer", "B. Commenter", "C. Editor", "D. Owner"],
          },
          {
            chapter: 2,
            question:
              "Q2. A person with ______ access can view a file and leave comments or suggestions without changing the actual content.",
            answer: "B. Commenter",
            options: ["A. Viewer", "B. Commenter", "C. Editor", "D. Owner"],
          },
          {
            chapter: 2,
            question:
              "Q3. A person with ______ access can view, comment, and directly change a file's actual content.",
            answer: "C. Editor",
            options: ["A. Viewer", "B. Commenter", "C. Editor", "D. Owner"],
          },
          {
            chapter: 2,
            question:
              "Q4. The ______ has full control over a file, including deleting it and changing who else has access.",
            answer: "D. Owner",
            options: ["A. Viewer", "B. Commenter", "C. Editor", "D. Owner"],
          },
          {
            chapter: 2,
            question:
              "Q5. Sharing an entire folder typically grants the same permission level to everything inside it automatically, a behavior called ______ permissions.",
            answer: "A. inherited",
            options: [
              "A. inherited",
              "B. deliberate",
              "C. restricted",
              "D. temporary",
            ],
          },
          {
            chapter: 2,
            question:
              "Q6. A consistent naming convention typically includes a date or version indicator, a clear description, and the ______.",
            answer: "B. responsible person",
            options: [
              "A. file size",
              "B. responsible person",
              "C. software version",
              "D. storage location",
            ],
          },
          {
            chapter: 2,
            question:
              "Q7. Placing the date first in a file name, in ______ order, allows files to sort chronologically by default.",
            answer: "C. year-month-day",
            options: [
              "A. day-month-year",
              "B. month-day-year",
              "C. year-month-day",
              "D. random",
            ],
          },
          {
            chapter: 2,
            question:
              "Q8. Inside the MyTrimesterPortfolio folder, the three subfolders created were Drafts, Final, and ______.",
            answer: "B. Archive",
            options: ["A. Backup", "B. Archive", "C. Shared", "D. Personal"],
          },
          {
            chapter: 2,
            question:
              "Q9. For Member Loan Records, the Board is only given ______ access so they cannot alter records.",
            answer: "D. Viewer",
            options: ["A. Editor", "B. Owner", "C. Commenter", "D. Viewer"],
          },
          {
            chapter: 2,
            question:
              "Q10. For Board Meeting Reports, Board members are given ______ access so they can give feedback without altering the official record.",
            answer: "C. Commenter",
            options: ["A. Editor", "B. Owner", "C. Commenter", "D. Viewer"],
          },
          {
            chapter: 2,
            question:
              "Q11. For Public Member Announcements, only the Communications Staff is given ______ access, while everyone else is given Viewer access.",
            answer: "B. Editor",
            options: ["A. Commenter", "B. Editor", "C. Owner", "D. Restricted"],
          },
          {
            chapter: 2,
            question:
              "Q12. Most cloud platforms automatically keep a running history of every change made to a shared file, often called ______.",
            answer: "B. version history",
            options: [
              "A. audit log",
              "B. version history",
              "C. edit trail",
              "D. backup log",
            ],
          },
          {
            chapter: 2,
            question:
              "Q13. Version history lets you open a previous version of a file and either restore it directly or copy back the specific piece that was ______.",
            answer: "A. deleted",
            options: ["A. deleted", "B. lost", "C. shared", "D. hidden"],
          },
          {
            chapter: 2,
            question:
              "Q14. If version history reveals a change from someone who should never have had Editor access, this is a sign that ______ were never correctly set.",
            answer: "B. permission levels",
            options: [
              "A. file names",
              "B. permission levels",
              "C. folder colors",
              "D. storage limits",
            ],
          },
          {
            chapter: 2,
            question:
              "Q15. If you cannot edit a shared file, the likely cause is that you were only given Viewer or ______ access.",
            answer: "C. Commenter",
            options: ["A. Owner", "B. Editor", "C. Commenter", "D. Admin"],
          },
          {
            chapter: 2,
            question:
              "Q16. If a file seems to have disappeared, the first thing to try is to ______ the drive by keyword rather than assuming it was deleted.",
            answer: "C. search",
            options: ["A. restore", "B. delete", "C. search", "D. rename"],
          },
          {
            chapter: 2,
            question:
              "Q17. If someone's edits seem to have vanished, the first thing to try is to check ______ before recreating the work.",
            answer: "B. version history",
            options: [
              "A. permission levels",
              "B. version history",
              "C. the folder name",
              "D. the file size",
            ],
          },
          {
            chapter: 2,
            question:
              'Q18. A surprising number of "broken" file problems are not technical failures at all — they are ______ problems wearing a technical disguise.',
            answer: "C. permission",
            options: ["A. naming", "B. storage", "C. permission", "D. network"],
          },
          {
            chapter: 2,
            question:
              "Q19. A ______ is defined as a deliberately assigned setting controlling what a specific person can do with a shared file.",
            answer: "B. permission level",
            options: [
              "A. naming convention",
              "B. permission level",
              "C. version history",
              "D. filing cabinet",
            ],
          },
          {
            chapter: 2,
            question:
              "Q20. A ______ is defined as a consistent, predictable pattern for naming files, typically including a date, description, and responsible party.",
            answer: "C. naming convention",
            options: [
              "A. permission level",
              "B. version history",
              "C. naming convention",
              "D. sharing setting",
            ],
          },
          {
            chapter: 3,
            question:
              "1. A browser will silently repair broken markup, but a __________ checks a document against the actual written specification.",
            answer: "validator",
            options: ["validator", "compiler", "search engine", "firewall"],
          },
          {
            chapter: 3,
            question:
              "2. XHTML requires that every element have a real __________, even ones HTML5 quietly allows you to skip.",
            answer: "closing tag",
            options: ["attribute", "closing tag", "comment", "doctype"],
          },
          {
            chapter: 3,
            question:
              "3. Void elements such as <br>, <img>, <input>, and <hr> must end with a trailing __________ to self-close properly.",
            answer: "slash",
            options: ["colon", "semicolon", "slash", "asterisk"],
          },
          {
            chapter: 3,
            question:
              "4. In XHTML, all tag names and attribute names must be written in __________.",
            answer: "lowercase",
            options: ["uppercase", "lowercase", "Title Case", "camelCase"],
          },
          {
            chapter: 3,
            question:
              "5. Every attribute value in XHTML must be __________, with no exceptions.",
            answer: "quoted",
            options: ["numeric", "quoted", "capitalized", "hyphenated"],
          },
          {
            chapter: 3,
            question:
              "6. Elements must nest properly, closing in the exact __________ order they opened.",
            answer: "reverse",
            options: ["alphabetical", "random", "reverse", "forward"],
          },
          {
            chapter: 3,
            question:
              "7. A complete XHTML document must have exactly one __________ element wrapping everything else.",
            answer: "root",
            options: ["header", "meta", "root", "child"],
          },
          {
            chapter: 3,
            question:
              "8. The corrected version of <p>This text is <strong>very <em>important</strong></em>.</p> closes the <em> tag __________, since it opened last.",
            answer: "first",
            options: ["last", "never", "first", "twice"],
          },
          {
            chapter: 3,
            question:
              "9. The <__________> element represents one self-contained piece of content that would still make sense on its own if syndicated elsewhere.",
            answer: "article",
            options: ["aside", "article", "footer", "nav"],
          },
          {
            chapter: 3,
            question:
              "10. The <__________> element represents a distinct sub-topic within a larger piece of content, ideally introduced by its own heading.",
            answer: "section",
            options: ["section", "figure", "header", "span"],
          },
          {
            chapter: 3,
            question:
              "11. The <__________> element holds content that is related to, but not central to, the main content.",
            answer: "aside",
            options: ["main", "aside", "article", "summary"],
          },
          {
            chapter: 3,
            question:
              "12. The <figcaption> element pairs with <__________> to give an image a genuine structural caption.",
            answer: "figure",
            options: ["img", "picture", "figure", "canvas"],
          },
          {
            chapter: 3,
            question:
              "13. Screen readers can jump straight to a page's articles and sections only if the markup uses real semantic tags instead of a generic, unlabeled __________.",
            answer: "div",
            options: ["div", "span", "table", "form"],
          },
          {
            chapter: 3,
            question:
              "14. The official online tool used to check a document's markup against the published HTML specification is called the __________.",
            answer: "W3C Markup Validator",
            options: [
              "HTML Linter",
              "W3C Markup Validator",
              "Browser Console",
              "CSS Inspector",
            ],
          },
          {
            chapter: 3,
            question:
              '15. On the W3C Validator site, you paste your complete document into the __________ tab before clicking "Check."',
            answer: "Validate by Direct Input",
            options: [
              "Validate by File Upload",
              "Validate by URI",
              "Validate by Direct Input",
              "Validate by Bookmarklet",
            ],
          },
          {
            chapter: 3,
            question:
              "16. A validator __________ is a genuine rule violation that keeps a document from passing, such as an unclosed tag or an unquoted attribute.",
            answer: "error",
            options: ["suggestion", "warning", "error", "comment"],
          },
          {
            chapter: 3,
            question:
              "17. A validator __________ flags something technically allowed but usually still worth checking, such as an empty alt attribute on a content-bearing image.",
            answer: "warning",
            options: ["error", "crash", "warning", "exception"],
          },
          {
            chapter: 3,
            question:
              '18. Placing a <p> directly inside a <ul> instead of inside an <li> triggers the error type called "element not allowed as __________ of element."',
            answer: "child",
            options: ["sibling", "parent", "child", "ancestor"],
          },
          {
            chapter: 3,
            question:
              "19. An <img> tag with no alt attribute at all is treated as a hard __________, not a warning, because every image needs one.",
            answer: "error",
            options: ["suggestion", "warning", "error", "note"],
          },
          {
            chapter: 3,
            question:
              "20. __________ markup follows strict syntax rules — every element closed, proper nesting, and exactly one root element.",
            answer: "well-formed",
            options: ["semantic", "valid", "well-formed", "responsive"],
          },
          {
            chapter: 4,
            question:
              "1. XML ships with zero predefined tags, unlike HTML, where a tag like <table> means something specific because the _______ was built to recognize it.",
            answer: "B. browser",
            options: ["A. server", "B. browser", "C. database", "D. parser"],
          },
          {
            chapter: 4,
            question:
              "2. A tag such as <studentNumber> means nothing to any parser until the document's own _______ defines it by using it consistently.",
            answer: "C. author",
            options: ["A. reader", "B. server", "C. author", "D. validator"],
          },
          {
            chapter: 4,
            question:
              '3. The XML declaration <?xml version="1.0" encoding="UTF-8"?> must always appear as the very _______ line of the file.',
            answer: "B. first",
            options: ["A. last", "B. first", "C. second", "D. middle"],
          },
          {
            chapter: 4,
            question:
              "4. In an XML document, the single outer container that every other element nests inside is called the _______ element.",
            answer: "A. child",
            options: ["A. child", "B. parent", "C. root", "D. sibling"],
          },
          {
            chapter: 4,
            question:
              "5. If a single tag is left unclosed, most browsers show a raw parse error and refuse to display anything past the point where the document stopped making _______.",
            answer: "A. sense",
            options: ["A. sense", "B. noise", "C. color", "D. size"],
          },
          {
            chapter: 4,
            question:
              '6. Unlike a browser handling HTML, an XML parser draws no gap between "renders" and "valid" — if a document isn\'t well-formed, it simply does not _______.',
            answer: "B. parse",
            options: ["A. save", "B. parse", "C. print", "D. compile"],
          },
          {
            chapter: 4,
            question:
              "7. One of the five well-formedness rules states that elements must nest properly, closing in the exact _______ order they opened.",
            answer: "C. reverse",
            options: ["A. same", "B. random", "C. reverse", "D. alphabetical"],
          },
          {
            chapter: 4,
            question:
              "8. According to the well-formedness rules, a document must contain exactly _______ root element(s).",
            answer: "D. one",
            options: ["A. zero", "B. two", "C. three", "D. one"],
          },
          {
            chapter: 4,
            question: "9. Attribute values in XML must always be _______.",
            answer: "B. quoted",
            options: [
              "A. numbered",
              "B. quoted",
              "C. capitalized",
              "D. hyphenated",
            ],
          },
          {
            chapter: 4,
            question:
              "10. Tag names in XML are case-sensitive, meaning <Student> and <student> are treated as two different, _______ tags to a parser.",
            answer: "C. unrelated",
            options: [
              "A. identical",
              "B. optional",
              "C. unrelated",
              "D. nested",
            ],
          },
          {
            chapter: 4,
            question:
              "11. The mistake <course code=OLWS1> is fatal because the attribute value is left _______.",
            answer: "B. unquoted",
            options: [
              "A. empty",
              "B. unquoted",
              "C. misspelled",
              "D. duplicated",
            ],
          },
          {
            chapter: 4,
            question:
              "12. When a document has two top-level siblings such as two separate <student> elements, the fix is to wrap both inside a single _______.",
            answer: "C. parent",
            options: [
              "A. attribute",
              "B. comment",
              "C. parent",
              "D. declaration",
            ],
          },
          {
            chapter: 4,
            question:
              "13. A rough rule of thumb for structuring data is that if a value might repeat or need nested structure of its own, it should be made an _______ rather than an attribute.",
            answer: "A. element",
            options: [
              "A. element",
              "B. entity",
              "C. instruction",
              "D. encoding",
            ],
          },
          {
            chapter: 4,
            question:
              "14. In the expanded student record, id and code are used as attributes because they are short, single-value facts _______ the element they are attached to.",
            answer: "B. identifying",
            options: [
              "A. replacing",
              "B. identifying",
              "C. hiding",
              "D. duplicating",
            ],
          },
          {
            chapter: 4,
            question:
              "15. A DTD, or Document Type Definition, states what a document in a specific format is actually required to _______.",
            answer: "B. contain",
            options: ["A. display", "B. contain", "C. encode", "D. compress"],
          },
          {
            chapter: 4,
            question:
              "16. A student record missing the <program> element entirely can still be perfectly well-formed, but checking it against a DTD that requires <program> will cause it to fail _______.",
            answer: "C. validation",
            options: [
              "A. parsing",
              "B. rendering",
              "C. validation",
              "D. encoding",
            ],
          },
          {
            chapter: 4,
            question:
              "17. Unlike a DTD, XML Schema (XSD) can enforce actual data _______, such as text, numbers, or dates, rather than just presence.",
            answer: "A. types",
            options: ["A. types", "B. names", "C. lengths", "D. colors"],
          },
          {
            chapter: 4,
            question:
              "18. XSD is itself written in XML, which means the same parser rules for well-formedness apply to writing a _______, not just the data it checks.",
            answer: "C. schema",
            options: ["A. browser", "B. database", "C. schema", "D. server"],
          },
          {
            chapter: 4,
            question:
              "19. The OECD's Common Reporting Standard, used by tax administrations across dozens of countries, is itself defined as an XML _______.",
            answer: "B. schema",
            options: ["A. comment", "B. schema", "C. attribute", "D. browser"],
          },
          {
            chapter: 4,
            question:
              "20. JSON answers the same underlying question as XML — how two independently built systems agree on what a piece of data means — but drops the _______ requirement that XML enforces.",
            answer: "C. closing-tag",
            options: [
              "A. attribute",
              "B. root-element",
              "C. closing-tag",
              "D. encoding",
            ],
          },
          {
            chapter: 5,
            question:
              "1. JavaScript is a programming language that runs inside the user's __________ to create interactive webpage behavior.",
            answer: "Browser",
            options: ["Server", "Browser", "Database", "HTML file"],
          },
          {
            chapter: 5,
            question:
              "2. The __________ is the browser's live, in-memory model of a webpage built from HTML.",
            answer: "DOM",
            options: ["CSS", "PHP", "DOM", "Console"],
          },
          {
            chapter: 5,
            question:
              "3. JavaScript modifies the live __________ rather than directly changing the original HTML file stored on the server.",
            answer: "DOM",
            options: ["DOM", "Database", "CSS file", "Server"],
          },
          {
            chapter: 5,
            question:
              "4. The method __________ is used to find an HTML element using its unique ID.",
            answer: "getElementById()",
            options: [
              "querySelector()",
              "createElement()",
              "getElementById()",
              "appendChild()",
            ],
          },
          {
            chapter: 5,
            question:
              "5. The method __________ finds the first element that matches a CSS-style selector.",
            answer: "querySelector()",
            options: [
              "querySelector()",
              "getElementById()",
              "addEventListener()",
              "createElement()",
            ],
          },
          {
            chapter: 5,
            question:
              "6. The __________ property changes the content of an element and treats the assigned value as plain text.",
            answer: "textContent",
            options: ["innerHTML", "textContent", "classList", "style"],
          },
          {
            chapter: 5,
            question:
              "7. The __________ property allows JavaScript to insert and interpret HTML inside an element.",
            answer: "innerHTML",
            options: ["textContent", "classList", "innerHTML", "value"],
          },
          {
            chapter: 5,
            question:
              "8. The method __________ is used to create a new HTML element in memory.",
            answer: "createElement()",
            options: [
              "appendChild()",
              "createElement()",
              "querySelector()",
              "getElementById()",
            ],
          },
          {
            chapter: 5,
            question:
              "9. The method __________ places a newly created element into the live DOM.",
            answer: "appendChild()",
            options: [
              "appendChild()",
              "createElement()",
              "addEventListener()",
              "querySelector()",
            ],
          },
          {
            chapter: 5,
            question:
              "10. An __________ waits for a specific action to occur and then executes a function.",
            answer: "Event listener",
            options: [
              "HTML element",
              "Event listener",
              "Selector",
              "Runtime error",
            ],
          },
          {
            chapter: 5,
            question:
              "11. The method __________ is used to attach an event listener to an HTML element.",
            answer: "addEventListener()",
            options: [
              "addEventListener()",
              "appendChild()",
              "createElement()",
              "getElementById()",
            ],
          },
          {
            chapter: 5,
            question:
              "12. The __________ event occurs every time a user types or changes the value of a text field.",
            answer: "input",
            options: ["change", "click", "input", "load"],
          },
          {
            chapter: 5,
            question:
              "13. The __________ event generally fires after an element loses focus and its value has settled.",
            answer: "change",
            options: ["input", "change", "click", "DOMContentLoaded"],
          },
          {
            chapter: 5,
            question:
              "14. The browser's __________ is used to view JavaScript errors and other messages produced while a script runs.",
            answer: "Developer Console",
            options: [
              "Page Source",
              "Developer Console",
              "HTML Editor",
              "DOM Viewer",
            ],
          },
          {
            chapter: 5,
            question:
              "15. A JavaScript mistake that occurs while a script is running is called a __________ error.",
            answer: "runtime",
            options: ["syntax", "design", "runtime", "browser"],
          },
          {
            chapter: 5,
            question:
              "16. The __________ event fires after the browser has finished building the DOM from the HTML document.",
            answer: "DOMContentLoaded",
            options: [
              "DOMContentLoaded",
              "PageLoaded",
              "HTMLLoaded",
              "BrowserReady",
            ],
          },
          {
            chapter: 5,
            question:
              "17. The __________ attribute allows a script in the <head> to wait until the HTML has been parsed before executing.",
            answer: "defer",
            options: ["async", "wait", "defer", "delay"],
          },
          {
            chapter: 5,
            question:
              "18. A live character counter can obtain the number of characters typed by checking the text area's current __________.",
            answer: "value",
            options: ["value", "style", "length", "class"],
          },
          {
            chapter: 5,
            question:
              "19. JavaScript running in the visitor's own browser is described as __________-side programming.",
            answer: "client",
            options: ["server", "client", "database", "backend"],
          },
          {
            chapter: 5,
            question:
              "20. Unlike client-side JavaScript, __________-side programming can process information on a server and work with permanent data such as database records.",
            answer: "server",
            options: ["client", "browser", "server", "local"],
          },
        ],
      };
      let subject = "CC03";
      let chapter = "all";
      let questions = [];
      let index = 0;
      let score = 0;
      let answered = false;
      let selected = null;

      const $ = (id) => document.getElementById(id);

      function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
      function loadSet() {
        const source = BANK[subject].filter(
          (q) => chapter === "all" || String(q.chapter) === chapter,
        );
        questions = shuffle(source).map((q) => ({
          ...q,
          options: shuffle(q.options),
        }));
        index = 0;
        score = 0;
        answered = false;
        selected = null;
        render();
      }
      function current() {
        return questions[index];
      }
      function render() {
        if (!questions.length) {
          $("appContent").innerHTML =
            '<div class="card">No questions found.</div>';
          return;
        }
        renderQuiz();
      }
      function renderQuiz() {
        const q = current();
        const pct = (index / questions.length) * 100;
        const options = q.options
          .map((o, i) => {
            let cls = "option";
            if (answered) {
              if (o === q.answer) cls += " correct";
              else if (o === selected) cls += " wrong";
            } else if (o === selected) cls += " selected";
            return `<button class="${cls}" ${answered ? "disabled" : ""} data-opt="${encodeURIComponent(o)}">${htmlEscape(o)}</button>`;
          })
          .join("");
        $("appContent").innerHTML = `
  <div class="card">
    <div class="meta"><span>${subject} • Chapter ${q.chapter}</span><span>${index + 1} / ${questions.length}</span></div>
    <div class="progress"><div style="width:${pct}%"></div></div>
    <div class="question">${htmlEscape(q.question)}</div>
    <div class="answers">${options}</div>
    ${
      answered
        ? `<div class="feedback ${selected === q.answer ? "good" : "bad"}">
      <b>${selected === q.answer ? "Correct!" : "Incorrect."}</b>
      Correct answer: <strong>${htmlEscape(q.answer)}</strong>
    </div>`
        : ""
    }
    <div class="controls">
      <button class="btn primary next-btn" id="next" ${answered ? "" : "disabled"}>${index === questions.length - 1 ? "See Result" : "Next question"}</button>
    </div>
  </div>`;
        document.querySelectorAll(".option").forEach(
          (b) =>
            (b.onclick = () => {
              if (answered) return;
              selected = decodeURIComponent(b.dataset.opt);
              answered = true;
              if (selected === q.answer) score++;
              render();
            }),
        );
        $("next").onclick = () => {
          if (!answered) return;
          if (index === questions.length - 1) showResult();
          else {
            index++;
            answered = false;
            selected = null;
            render();
          }
        };
      }
      function showResult() {
        const pct = Math.round((score / questions.length) * 100);
        $("appContent").innerHTML = `
  <div class="card result">
    <div class="muted">${subject} • ${chapter === "all" ? "Chapters 1–5" : "Chapter " + chapter}</div>
    <div class="score">${score} / ${questions.length}</div>
    <h2>${pct}%</h2>
    <p class="muted">${pct >= 90 ? "Excellent work." : pct >= 75 ? "Good job. Keep reviewing the missed items." : "Keep practicing. Retry to get a new shuffled set."}</p>
  </div>`;
      }
      function htmlEscape(s) {
        return String(s).replace(
          /[&<>"']/g,
          (c) =>
            ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#039;",
            })[c],
        );
      }

      document.querySelectorAll(".tab").forEach(
        (t) =>
          (t.onclick = () => {
            subject = t.dataset.subject;
            document
              .querySelectorAll(".tab")
              .forEach((x) => x.classList.remove("active"));
            t.classList.add("active");
            loadSet();
          }),
      );
      document.querySelectorAll(".chapter-btn").forEach((button) => {
        button.onclick = () => {
          chapter = button.dataset.chapter;
          document
            .querySelectorAll(".chapter-btn")
            .forEach((item) => item.classList.remove("active"));
          button.classList.add("active");
          loadSet();
        };
      });
      loadSet();
