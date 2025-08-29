import { useReducer } from "react";

type Article = {
  id: number;
  title: string;
};

type State = {
  unread: Article[];
  read: Article[];
};

type Action =
  | { type: "MARK_AS_READ"; id: number }
  | { type: "MARK_AS_UNREAD"; id: number };

const initialState: State = {
  unread: [
    { id: 1, title: "Hướng dẫn sử dụng React" },
    { id: 2, title: "Tìm hiểu về JavaScript ES6" },
    { id: 3, title: "CSS Flexbox & Grid" },
    { id: 4, title: "Hướng dẫn sử dụng React Hooks" },
  ],
  read: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "MARK_AS_READ": {
      const article = state.unread.find((item) => item.id === action.id);
      if (!article) return state;
      return {
        unread: state.unread.filter((item) => item.id !== action.id),
        read: [...state.read, article],
      };
    }
    case "MARK_AS_UNREAD": {
      const backArticle = state.read.find((item) => item.id === action.id);
      if (!backArticle) return state;
      return {
        unread: [...state.unread, backArticle],
        read: state.read.filter((item) => item.id !== action.id),
      };
    }
    default:
      return state;
  }
}

export default function ArticleTracker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Quản lý bài viết</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">
          Bài viết chưa đọc ({state.unread.length})
        </h3>
        {state.unread.length > 0 ? (
          state.unread.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 border rounded-lg mb-2"
            >
              <span>{item.title}</span>
              <button
                onClick={() => dispatch({ type: "MARK_AS_READ", id: item.id })}
                className="px-3 py-1 bg-green-500 text-white rounded-lg"
              >
                Đã đọc
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Không có bài viết nào chưa đọc</p>
        )}
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Bài viết đã đọc ({state.read.length})
        </h3>
        {state.read.length > 0 ? (
          state.read.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 border rounded-lg mb-2"
            >
              <span>{item.title}</span>
              <button
                onClick={() =>
                  dispatch({ type: "MARK_AS_UNREAD", id: item.id })
                }
                className="px-3 py-1 bg-orange-500 text-white rounded-lg"
              >
                Đánh dấu chưa đọc
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Chưa có bài viết nào được đọc</p>
        )}
      </div>
    </div>
  );
}
