import React from 'react';
import { GameBoard } from '@brain-games/dualnback';
// import { GameBoard } from "@dualnback";
// import { GameBoard } from 'packages/games/dualnback';
// import { GameBoard } from '@packages/games/dualnback';
// import { GameBoard } from '../../../../packages/games/dualnback/src/index';

export default function DualNBackPage() {
    return (
        <main className="container mx-auto p6">
            <h1 className="text-3xl font-bold mb-4">
                Dual N-Back Training
            </h1>
            <GameBoard />
        </main>
    )
}