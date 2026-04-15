import TaskList from "./task-list";

export default () => <TaskList />;

// export default function TaskList() {
//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />
//       <View>
//         <Text className="text-3xl">Lista de tareas</Text>

//         <Pressable onPress={() => router.push("/tasks/1")}>
//           <Text>Ir a tarea 1</Text>
//         </Pressable>
//       </View>
//     </>
//   );
// }
