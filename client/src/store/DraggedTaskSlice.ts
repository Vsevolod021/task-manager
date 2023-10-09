import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DraggedTask = {
    id: number | null;
};

const initialState: DraggedTask = {
    id: null,
};

const draggedTaskSlice = createSlice({
    name: 'DraggedTask',
    initialState,
    reducers: {
        setDraggedTask(state, action: PayloadAction<number>) {
            state.id = action.payload;
        },
        removeDraggedTask(state) {
            state.id = null;
        },
    },
});

export const { setDraggedTask, removeDraggedTask } = draggedTaskSlice.actions;

export default draggedTaskSlice.reducer;
