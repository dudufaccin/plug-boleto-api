import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../src/database';

class BB_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

BB_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'BB_Consulta',
        tableName: 'BB_Consulta',
        timestamps: false,
    }
);

class Itau_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

Itau_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Itau_Consulta',
        tableName: 'Itau_Consulta',
        timestamps: false,
    }
);

class Sicoob_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

Sicoob_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Sicoob_Consulta',
        tableName: 'Sicoob_Consulta',
        timestamps: false,
    }
);
class Santander_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

Santander_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Santander_Consulta',
        tableName: 'Santander_Consulta',
        timestamps: false,
    }
);
class Sicredi_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

Sicredi_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Sicredi_Consulta',
        tableName: 'Sicredi_Consulta',
        timestamps: false,
    }
);
class Caixa_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

Caixa_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Caixa_Consulta',
        tableName: 'Caixa_Consulta',
        timestamps: false,
    }
);
class Banrisul_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

Banrisul_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Banrisul_Consulta',
        tableName: 'Banrisul_Consulta',
        timestamps: false,
    }
);
class Inter_Consulta extends Model {
    public id!: number;
    public horario!: Date;
    public resultado!: string;
    public tempo_resposta!: number;
}

Inter_Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        horario: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['online', 'offline']],
            },
        },
        tempo_resposta: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Inter_Consulta',
        tableName: 'Inter_Consulta',
        timestamps: false,
    }
);
export {
    BB_Consulta,
    Itau_Consulta,
    Sicoob_Consulta,
    Sicredi_Consulta,
    Caixa_Consulta,
    Santander_Consulta,
    Banrisul_Consulta,
    Inter_Consulta,
};
