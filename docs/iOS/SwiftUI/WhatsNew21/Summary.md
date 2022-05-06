# What's New in SwiftUI WWDC2021

Subpages
- [Declarative UI](DeclarativeUI.md)

# Summary
## 1. Binding

With binding collection to list, SwiftUI pass the elements one by one and you may use the value just like you used to.

``` swift
// Interactive collections

struct DirectionsList: View {
    @Binding var directions: [Direction]

    var body: some View {
        List (directions) { $direction in
            Label {
                Text(direction.text)
            } icon: {
                DirectionsIcon(direction)
            }
        }
    }
}
```

Add interactive controls like a textfield, using the normal binding syntax.

```swift
// Interactive collections

struct DirectionsList: View {

    @Binding var directions: [Direction]

    var body: some View {
        List (directions) { $direction in
            Label {
                TextField("Instructions", text: direction.text)
            } icon: {
                DirectionsIcon(direction)
            }
            .listRowSeparatorTint(direction.color)
          //  .listRowSeparator(.hidden)
        }
    }
}
```

## 2. Swipe Actions

```swift
// Swipe actions

ForEach ($characters) { $character in

	CharacterProfile(character)

	swipeActions(edge: .leading) {
		Button {
			withAnimation {
				character.isPinned.toggle()
			}
		} label: {
			if character.isPinned {
				Label ("Unpin", systemImage: "pin.slash")
			} else {
				Label("Pin", systemImage: "pin")
			}
		}
		.tint( .yellow)
	}

	swipeActions (edge :.trailing) {
	...
	}
}
```

## 3. Coredata Tables (Mac Only)

```swift
@FetchRequest(sortDescriptors: [SortDescriptor(\.name)])
private var characters: FetchedResults<StoryCharacter>
@State private var selection = Set<StoryCharacter.ID>()

Table(characters, selection: $selection, sortOrder: $characters.sortDescriptors) {
  TableColumn("􀟈") { CharacterIcon($0) }
    .width(20)
  TableColumn("Villain") { Text($0.isVillain ? "Villain" : "Hero") }
    .width(40)
  TableColumn("Name", value: \.name)
  TableColumn("Powers", value: \.powers)
}
```


## 4. Sectioned Fetched Request

```swift
@SectionedFetchRequest(
  sectionIdentifier: \.isPinned,
  sortDescriptors: [
    SortDescriptor(\.isPinned, order: .reverse),
    SortDescriptor(\.lastModified)
  ],
  animation: .default)
private var characters: SectionedFetchResults<...>

List {
  ForEach(characters) { section in
    Section(section.id ? "Pinned" : "Heroes & Villains") {
      ForEach(section) { character in
        CharacterRowView(character)
      }
    }
  }
}
```

## 4. Search

For more info: Craft search experiences in SwiftUI

```swift
  var body: some View {
    NavigationView {
      List {
        if characters.filterText.isEmpty {
          if !characters.pinned.isEmpty {
            Section("Pinned") {
              sectionContent(for: characters.pinned)
            }
          }
          Section("Heroes & Villains") {
            sectionContent(for: characters.unpinned)
          }
        } else {
          sectionContent(for: characters.filtered)
        }
      }
      .listStyle(.sidebar)
      .searchable(text: $characters.filterText)
      .navigationTitle("Characters")
    }
  }
```


## 5. Safe Area Inset 

```swift
struct ContentView: View {
    let newSymbols = Array(repeating: Symbol("swift"), count: 645)
    let systemColors: [Color] = [.red, .orange, .yellow, .green, .mint, .teal, .cyan, .blue, .indigo, .purple, .pink, .gray, .brown]

    var body: some View {
        ScrollView {
            symbolGrid
        }
        .safeAreaInset(edge: .bottom, spacing: 0) {
            VStack(spacing: 0) {
                Divider()
                VStack(spacing: 0) {
                    Text("\(newSymbols.count) new symbols")
                        .foregroundStyle(.primary)
                        .font(.body.bold())
                    Text("\(systemColors.count) system colors")
                        .foregroundStyle(.secondary)
                }
                .padding()
            }
            .background(.regularMaterial)
        }
    }

    var symbolGrid: some View {
        LazyVGrid(columns: [.init(.adaptive(minimum: 40, maximum: 40))]) {
            ForEach(0 ..< newSymbols.count, id: \.self) { index in
                newSymbols[index].image
                    .foregroundStyle(.white)
                    .frame(width: 40, height: 40)
                    .background(systemColors[index % systemColors.count])
            }
        }
        .padding()
    }
}

struct Symbol: Identifiable {
    let name: String
    init(_ name: String) { self.name = name }

    var image: Image { Image(systemName: name) }
    var id: String { name }
}
```

## 5. Markdown Support

### Custom Markdown

FMI: Checkout  `Whats new in foundation?`

## 6. Localization

FMI: Checkout  `Localize your swiftUI app?`

## 7. Dynamic Type


## 8. Text Selection

```swift
VStack(alignment: .leading, spacing: 0) {
	ActivityHeader(activity)
	Divider()
	Text(activity.info)
		.textSelection(.enabled)
		.padding()
	Spacer()
}
.background()
.navigationTitle(activity.name)
        
```


## 9. Formatting

### Text Formatting

```swift
var body: some View {
	Text(activity.people
	.map(\.nameComponents)
	.formatted(
		.list(memberStyle:.name(style: .short), type: .and))
		)
		.scenePadding()
}
```

### Text Feld Formatting

```swift
var body: some View {
   TextField("New Person", value: $newAttendee,
	  format: .name(style: .medium))
}
```

### Text Field Prompts and Labels

```swift
var body: some View {
	Form {
		TextField("Name:", text: $activity.name, prompt: Text("New Activity"))
		TextField("Location:", text: $activity.location)
		DatePicker("Date:", selection: $activity.date)
	}
	.frame(minWidth: 250)
	.padding()
}
```

## 10. Text Field Submission

```swift
var body: some View {
	TextField("New Person", value: $newAttendee,
		format: .name(style: .medium)
	)
	.onSubmit {
		activity.append(Person(newAttendee))
		newAttendee = PersonNameComponents()
	}
}
```

### Submit Label

```swift
var body: some View {
	TextField("New Person", value: $newAttendee,
		format: .name(style: .medium)
	)
	.onSubmit {
		activity.append(Person(newAttendee))
		newAttendee = PersonNameComponents()
	}
	.submitLabel(.done)
}
```

## 11. Keyboard Toolbar

```swift
struct ContentView: View {
    @State private var activity: Activity = .sample
    @FocusState private var focusedField: Field?

    var body: some View {
        Form {
            TextField("Name", text: $activity.name, prompt: Text("New Activity"))
            TextField("Location", text: $activity.location)
            DatePicker("Date", selection: $activity.date)
        }
        .toolbar {
            ToolbarItemGroup(placement: .keyboard) {
                Button(action: selectPreviousField) {
                    Label("Previous", systemImage: "chevron.up")
                }
                .disabled(!hasPreviousField)

                Button(action: selectNextField) {
                    Label("Next", systemImage: "chevron.down")
                }
                .disabled(!hasNextField)
            }
        }
    }

    private func selectPreviousField() {
       focusedField = focusedField.map {
          Field(rawValue: $0.rawValue - 1)!
       }
    }

    private var hasPreviousField: Bool {
        if let currentFocusedField = focusedField {
            return currentFocusedField.rawValue > 0
        } else {
            return false
        }
    }

    private func selectNextField() {
       focusedField = focusedField.map {
          Field(rawValue: $0.rawValue + 1)!
       }
    }

    private var hasNextField: Bool {
        if let currentFocusedField = focusedField {
            return currentFocusedField.rawValue < Field.allCases.count
        } else {
            return false
        }
    }
}

private enum Field: Int, Hashable, CaseIterable {
   case name, location, date, addAttendee
}
```

## 12. Focus State

FMI `Direct and reflect focus in SwiftUI`

```swift
private enum Field: Int, Hashable, CaseIterable {
   case name, location, date, addAttendee
}

struct ContentView: View {
    @State private var activity: Activity = .sample
    @State private var newAttendee = PersonNameComponents()
    @FocusState private var focusedField: Field?

    var body: some View {
        VStack {
            Form {
                TextField("Name:", text: $activity.name, prompt: Text("New Activity"))
                    .focused($focusedField, equals: .name)
                TextField("Location:", text: $activity.location)
                    .focused($focusedField, equals: .location)
                DatePicker("Date:", selection: $activity.date)
                    .focused($focusedField, equals: .date)
            }

            VStack(alignment: .leading) {
                TextField("New Person", value: $newAttendee, format: .name(style: .medium))
                    .focused($focusedField, equals: .addAttendee)

                ControlGroup {
                    Button {
                        focusedField = .addAttendee
                    } label: {
                       Label("Add Attendee", systemImage: "plus")
                    }
                }
                .fixedSize()
            }
        }
        .frame(minWidth: 250)
        .scenePadding()
    }
    
    func endEditing() {
        focusedField = nil
    }
}
```


## 13. Buttons

```swift
struct ContentView: View {
    var body: some View {
        VStack {
            Button(action: addToJar) {
                Text("Add to Jar").frame(maxWidth: 300)
            }
            .controlProminence(.increased)
            .keyboardShortcut(.defaultAction)

            Button(action: addToWatchlist) {
                Text("Add to Watchlist").frame(maxWidth: 300)
            }
            .tint(.accentColor)
        }
        .buttonStyle(.bordered)
        .controlSize(.large)
    }

    private func addToJar() {}
    private func addToWatchlist() {}
}
```

### Confirmation Dialog

```swift
struct ContentView: View {
    var entry: ButtonEntry = .sample
    @State private var showConfirmation: Bool = false

    var body: some View {
        ButtonEntryCell(entry)
            .contextMenu {
                Section {
                    Button("Open") {
                        // ...
                    }
                    Button("Delete...", role: .destructive) {
                        showConfirmation = true
                        // ...
                    }
                }

                Section {
                    Button("Archive") {}

                    Menu("Move to") {
                        ForEach(Jar.allJars) { jar in
                            Button("\(jar.name)") {
                                //addTo(jar)
                            }
                        }
                    }
                }
            }
            .confirmationDialog(
                "Are you sure you want to delete \(entry.name)?",
                isPresented: $showConfirmation
            ) {
                Button("Delete", role: .destructive) {
                    // delete the entry
                }
            } message: {
                Text("Deleting \(entry.name) will remove it from all of your jars.")
            }
    }
}
```

## 14. Control Group: back/forward control

```swift
struct ContentView: View {
    @State var current: String = "More buttons"
    @State var history: [String] = ["Text and keyboard", "Advanced graphics", "Beyond lists", "Better lists"]
    @State var forwardHistory: [String] = []

    var body: some View {
        Color.clear
            .toolbar{
                ToolbarItem(placement: .navigation) {
                    ControlGroup {
                        Menu {
                            ForEach(history, id: \.self) { previousSection in
                                Button(previousSection) {
                                    goBack(to: previousSection)
                                }
                            }
                        } label: {
                            Label("Back", systemImage: "chevron.backward")
                        } primaryAction: {
                            goBack(to: history[0])
                        }
                        .disabled(history.isEmpty)

                        Menu {
                            ForEach(forwardHistory, id: \.self) { nextSection in
                                Button(nextSection) {
                                    goForward(to: nextSection)
                                }
                            }
                        } label: {
                            Label("Forward", systemImage: "chevron.forward")
                        } primaryAction: {
                            goForward(to: forwardHistory[0])
                        }
                        .disabled(forwardHistory.isEmpty)
                    }
                    .controlGroupStyle(.navigation)
                }
            }
            .navigationTitle(current)
    }

    private func goBack(to section: String) {
        guard let index = history.firstIndex(of: section) else { return }
        forwardHistory.insert(current, at: 0)
        forwardHistory.insert(contentsOf: history[...history.index(before: index)].reversed(), at: 0)
        history.removeSubrange(...index)
        current = section
    }

    private func goForward(to section: String) {
        guard let index = forwardHistory.firstIndex(of: section) else { return }
        history.insert(current, at: 0)
        history.insert(contentsOf: forwardHistory[...forwardHistory.index(before: index)].reversed(), at: 0)
        forwardHistory.removeSubrange(...index)
        current = section
    }
}
```
